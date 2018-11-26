'use strict'

const mongoose = require('mongoose');
const port = process.env.PORT || 3678;

mongoose.connect('mongodb://parcial3:admin123@ds125001.mlab.com:25001/parcial3',(err,res)=>{
	console.log("base de datos iniciada")

	if (err) {
		// throw err;
		console.log("Este es un error")
	}
	else{
		app.listen(port, () => {
		console.log(`API RES Examen Tercer Pacial en http://localhost:${port}`);
	});
	}

})

const app = require('./app');