const { DoctorDB } = require('../models/doctorDB');
const express = require('express');
const router = express.Router();
//const { bcrypt } = require('bcrypt');

router.get('/registerDoctor', function(req,res) {
    //res.send("Hello from the server");
    console.log("Get requests for all doctors");
    DoctorDB.find({})
    .exec(function(err,registerDoctor) {
        if(err) {
            console.log("Error!");
        } else {
            res.json(registerDoctor);                                                                   
        }
    })
})

router.post('/registerDoctor', async(req,res)=> {
    /*const { error } = validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }*/
    let doctorDB = await DoctorDB.findOne({email1: req.body.email1});
    if(doctorDB) {
        return res.status(400).send("The email ID already exists");
    } else {
        doctorDB = new DoctorDB({
            fullName1: req.body.fullName1,
            qualification: req.body.qualification,
            specialization: req.body.specialization,
            yoe: req.body.yoe,
            city: req.body.city,
            email1: req.body.email1,
            mobileNo1: req.body.mobileNo1,
            fees: req.body.fees,
            psw1: req.body.psw1
        });
        /*const salt = await bcrypt.genSalt(20);
        doctorDB.psw1 = await bcrypt.hash(doctorDB.psw1,salt);*/
        await doctorDB.save();
        res.send(doctorDB); 
    }
});

module.exports = router;
