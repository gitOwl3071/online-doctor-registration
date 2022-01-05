const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const doctors = require('./routes/doctors');
const patients = require('./routes/patients');
const mongoose = require('mongoose');
//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi);

const app = express();

app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost/OnlineDoctorDB')
.then(()=> console.log('Connected to MongoDB!'))
.catch(err=> console.log('An error occurred',err));

app.use(express.json());
app.use('/api',doctors);
app.use('/api',patients);


/*app.get('/', function(req,res) {
  res.send("Hello from the server");
})

app.post('/registerDoctor',function(req,res) {
  console.log(req.body);
  res.status(200).send({"message":"Data received"});
})

app.post('/registerPatient',function(req,res) {
  console.log(req.body);
  res.status(200).send({"message":"Data received"});
})*/

module.exports = app; 