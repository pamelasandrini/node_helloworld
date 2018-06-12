'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSampleDataTypesSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    published: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    //Embedded sub-document
    detail:{
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
})

module.exports = mongoose.model('BookSampleDataTypes', BookSampleDataTypesSchema);