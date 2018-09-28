const mongoose = require('mongoose');
mongoose.set('useFindandModify', false);

const Schema = mongoose.Schema;

const journalSchema = new Schema({
    username: String,
    title: String,
    journalEntry: String,
    date: Date
});

const journal = mongoose.model('journal', journalSchema);

module.exports = journal;