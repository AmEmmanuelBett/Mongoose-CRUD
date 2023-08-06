var mongoose = require('mongoose')
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(text){
                return text.length > 0;
            },
            message: "Name cannot be empty"
        }
    },
}))