var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var pianos = require('../models/pianos');

var pianoRouter = express.Router();
pianoRouter.use(bodyParser.json());

pianoRouter.route('/')
.get(function (req, res, next) {
    pianos.find({}, function (err, pianos) {
        if (err) next(err);
        res.json(pianos);
    });
})
// Uncomment the dangerous ones when we have users and authentication
/*
.post(function (req, res, next) {
    pianos.create(req.body, function (err, piano) {
        if (err) next(err);
        console.log('piano created!');
        var id = piano._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the piano with id: ' + id);
    });
})

.delete(function (req, res, next) {
    pianos.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
})*/
;

pianoRouter.route('/:pianoId')
.get(function (req, res, next) {
    pianos.findById(req.params.pianoId, function (err, piano) {
        if (err) next(err);
        res.json(piano);
    });
})
/*
.put(function (req, res, next) {
    pianos.findByIdAndUpdate(req.params.pianoId, {
        $set: req.body
    }, {
        new: true
    }, function (err, piano) {
        if (err) next(err);
        res.json(piano);
    });
})

.delete(function (req, res, next) {
    pianos.findByIdAndRemove(req.params.pianoId, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
})*/
;


module.exports = pianoRouter;
