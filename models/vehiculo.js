'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VehiculoShema = Schema({
	Marca: String,
	Modelo: String,
	Año: String,
	Deuda: String,
	url: String
})

module.exports = mongoose.model('Vehiculo', VehiculoShema)