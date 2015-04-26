// Build Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HackKayak');


// Test if Database if Connected
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("The Database is Connected.");
});


// Construct Database Schema
var FlightPriceSchema = new mongoose.Schema({
	flightNum: String,
	airline: String,
	departAirport: String,
	arrivalAirport: String,
	departureDate: Date,
	arrivalDate: Date,
	Price: Number,
});

var FlightPrice = mongoose.model('FlightPrice',FlightPriceSchema);



module.exports = db;