const mongoose = require('mongoose');
//const Joi = require('joi');

const DoctorDB = mongoose.model('DoctorDB', new mongoose.Schema({
    fullName1: {
        type: String,
        required: true,
        length: 50,
    },
    qualification: {
        type: String,
        required: true,
        length: 255
    },
    specialization: {
        type: String,
        required: true,
        length: 20
    },
    yoe: {
        type: Number,
        required: true,
        length: 20
    },
    city: {
        type: String,
        required: true,
        length: 255
    },
    email1: {
        type: String,
        required: true,
        lowercase: true,
        length: 50
    },
    mobileNo1: {
        type: String,
        required: true,
        length: 50
    },
    fees: {
        type: Number,
        required: true,
        length: 20
    },
    psw1: {
        type: String,
        required: true,
        length: 50
    }
}));

/*function validateDoctorDB(doctorDB) {
    const schema = Joi.object({
        fullName1: Joi.string().min(5).required(),
        qualification: Joi.string().min(255).required(),
        specialization: Joi.string().min(20).required(),
        yoe: Joi.string().min(20).required(),
        clinicAdd: Joi.string().min(255).required(),
        email1: Joi.string().min(50).required(),
        mobileNo1: Joi.string().min(50).required(),
        fees: Joi.string().min(20).required(),
        psw1: Joi.string().min(8).required()
    });
    return schema.validate(doctorDB,schema);
}*/

exports.DoctorDB = DoctorDB;
//module.exports.validate = validateDoctorDB;