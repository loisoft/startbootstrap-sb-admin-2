'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SpentSchema = new Schema({
    name: String,
    volume: Number,
    cateId: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Spent', SpentSchema);