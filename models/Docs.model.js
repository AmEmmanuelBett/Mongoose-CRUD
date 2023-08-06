var mongoose = require('mongoose')
var Schema = mongoose.Schema;


module.exports = mongoose.model('Docs', Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    user: {
        required: true,
        type: Schema.Types.ObjectId,    
        ref: 'User'
    },
    s

}))