'use strict'

const express = require('express')
const VehiculoController = require('../controllers/vehiculo')

const api = express.Router()

api.get('/vehiculos', VehiculoController.getVehiculo)

module.exports = api;