'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VehiculoShema = Schema({
	title: String,
	description: String,
	url: String
})

module.exports = mongoose.model('Vehiculo', VehiculoShema)