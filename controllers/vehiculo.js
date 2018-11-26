'use strict'

const Vehiculo = require('../models/vehiculo')

function getVehiculo(req,res){
	Vehiculo.find({}).sort({title : 1}).exec(function(err, vehiculo){ 
			if (err) {
				throw err;
				res.status(500).send("error")
			}
			if(!vehiculo){
				res.status(404).send("no ahi marcadores")
			}
			res.status(200).send({vehiculo})
		});
}


module.exports = {
	getVehiculo
}