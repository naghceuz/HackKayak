var express = require('express');
var router = express.Router();
require('../config/db.js')
var mongoose = require('mongoose');
var FlightPrice = mongoose.model('FlightPrice');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET search page
router.get('/search', function(req, res, next) {
	var departCity = req.body.departureCity;
	var arrivalCity = req.body.arrivalCity;
	res.render('/search', {})
});

// Deal with Search button action
router.post('/search', function(req, res, next) {
	if (req.body.departureCity != null && req.body.arrivalCity != null) { // if blank is not null and date is later than date
		console.log("Redirect to /search");
		res.redirect('/search');
	} else {
		res.redirect('/');
	}
});

module.exports = router;
