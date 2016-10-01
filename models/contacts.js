// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


// create a schema
var contactSchema = new Schema({
    email: {
        type: String,
        default: ""
    },
    telephone: {
        type: String,
        default: ""
    },
    message: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

/*
var contactSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Currency,
        required: true
    },
    graphic: {
        type: String,
        required: true,
        unique: true
    },
    sold: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
*/

// the schema is useless so far
// we need to create a model using it
var contacts = mongoose.model('contact', contactSchema);

// make this available to our Node applications
module.exports = contacts;
