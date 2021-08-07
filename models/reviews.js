const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: String,
    comment: String
});

module.exports = mongoose.model('Review', ReviewSchema);