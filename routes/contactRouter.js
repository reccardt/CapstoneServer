var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var contacts = require('../models/contacts');

var contactRouter = express.Router();
contactRouter.use(bodyParser.json());

contactRouter.route('/')
.get(function (req, res, next) {
    contacts.find({}, function (err, contacts) {
        if (err) next(err);
        res.json(contacts);
    });
})

.post(function (req, res, next) {
    contacts.create(req.body, function (err, contact) {
        if (err) next(err);
        console.log('contact created!');
        var id = contact._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the contact with id: ' + id);
    });
})
// Uncomment the dangerous ones when we have users and authentication
/*
.delete(function (req, res, next) {
    contacts.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
})*/
;

contactRouter.route('/:contactId')
.get(function (req, res, next) {
    contacts.findById(req.params.contactId, function (err, contact) {
        if (err) next(err);
        res.json(contact);
    });
})
/*
.put(function (req, res, next) {
    contacts.findByIdAndUpdate(req.params.contactId, {
        $set: req.body
    }, {
        new: true
    }, function (err, contact) {
        if (err) next(err);
        res.json(contact);
    });
})

.delete(function (req, res, next) {
    contacts.findByIdAndRemove(req.params.contactId, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
})*/
;


module.exports = contactRouter;
