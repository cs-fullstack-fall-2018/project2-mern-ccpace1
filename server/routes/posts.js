var express = require('express');
var router = express.Router();
var moment = require('moment');
var journal = require('../model/journalModel');

router.get('/', function (req, res, next){
    // ROUTE: GET a user's list of todos
    journal.find(function (err, entries) { //Use the find method on the data model to search DB
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send the JSON back to the client in the web response
        res.send(entries);
    });
});
router.post('/new', function (req, res, next) {
    const newEntry = journal({
        username: req.body.username,
        title: req.body.title,
        journalEntry: req.body.journalEntry,
        date: moment().format()
        // hasAttachment: req.body.hasAttachment
    });
    newEntry.save(function (err) {
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'OK'});
    });

});
router.get('/testuser', function (req, res, next) {

    // seed journal database
    const starterJournalEntries = [
        {
            username: 'testuser',
            title: 'Another Post',
            journalEntry: "Had a long day but finally posted",
            date: moment().subtract(7, 'days').format()
        },
        {
            username: 'testuser',
            title: 'My Second Post',
            journalEntry: "Back for a second post",
            date: moment().subtract(5, 'days').format()
        },
        {
            username: 'testuser',
            title: 'A nothing day',
            journalEntry: "Dreamed I went to work with no pants on!",
            date: moment().format()
        }
    ];

    // logger.debug("Adding some seed data");

    // Use the mongo method create to create records for the test data. err will hold any errors after create
    // and results will show records created.
    journal.create(starterJournalEntries, function (err, results) {
        // Lets us confirm that the seed data added via mongoose without any errors
        if (err) {
            console.log(err.message);
            throw err;
        }
        res.send(results);
    });

});
module.exports = router;