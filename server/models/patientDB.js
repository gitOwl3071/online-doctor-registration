const mongoose = require('mongoose');

const PatientDB = mongoose.model('PatientDB', new mongoose.Schema({
    fullName2: {
        type: String,
        required: true,
        length: 50
    },
    age: {
        type: Number,
        required: true,
        length: 20
    },
    gender: {
        type: String,
        required: true,
        length: 20
    },
    bloodGroup: {
        type: String,
        required: true,
        length: 20
    },
    email2: {
        type: String,
        required: true,
        length: 50
    },
    mobileNo2: {
        type: String,
        required: true,
        length: 50
    },
    psw2: {
        type: String,
        required: true,
        length: 50
    }
}));

exports.PatientDB = PatientDB;