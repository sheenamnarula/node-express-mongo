const mongoose = require('mongoose');
const recordSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    counts: {
        type : Array,
        default : []
    },
    createdAt: {
        type: Date,
    }
});
const Record  = mongoose.model('record', recordSchema);
module.exports = Record
