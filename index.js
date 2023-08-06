var express = require('express')
var app = express()
var bp = require('body-parser')
var mongoose = require('mongoose')


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var Doc = require('./models/Docs.model')
var User = require('./models/user.models')

const port = 3030

mongoose.connect(
    "mongodb+srv://emmanuel_inet:hEmi40bEck@cluster0.hazxs.mongodb.net/relDb?retryWrites=true&w=majority",
    (err) => {
        if (!err) {
            return console.log("Database connection successful")
        } else {
            return console.log("Error connecting to the database" + err)
        }
    }
)

app.get('/', (req, res) => {
    res.send("Hello There")
})

app.post('/add', (req, res) => {
    console.log("Adding User")
    var userObj = {
        "name": req.body.name,
    }
    var newUser = new User(userObj);
    newUser.save((err, user) => {
        if (err) {
            res.status(401).send(err)
        } else {
            res.status(200).json(user)
        }
    })

})

app.post('/addDoc', (req, res) => {
    console.log("addiing new Doc");
    var docObject = {
        "title": req.body.description,
        "description": req.body.description,
        "user": "61f79bb082357096d7ee4a5d"
    }
    var newDoc = new Doc(docObject);
    newDoc.save((err, doc) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(doc)
        }
    })
})

app.get('/docs', async (req, res) => {
    console.log("Getting all documents")
    await Doc.find({}).populate("user").exec((err, docs) => {
        if (err) {
            res.status(400).send(err)
        }
        else {
            res.status(200).send(docs)
        }
    })


})
app.listen(port, () => {
    console.log("Hey there your app is running on port: " + port)
})
