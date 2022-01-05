const { PatientDB } = require('../models/patientDB');
const express = require('express');
const router = express.Router();

router.get('/registerPatient', function(req,res) {
    console.log("Get requests for all patients");
    PatientDB.find({})
    .exec(function(err,registerPatient) {
        if(err) {
            console.log("Error!");
        } else {
            res.json(registerPatient);
        }
    })
})

router.post('/registerPatient',async(req,res) => {
    let patientDB = await PatientDB.findOne({email2: req.body.email2});
    if(patientDB) {
        return res.status(400).send("The email ID already exists");
    } else {
        patientDB = new PatientDB({
            fullName2: req.body.fullName2,
            age: req.body.age,
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            email2: req.body.email2,
            mobileNo2: req.body.mobileNo2,
            psw2: req.body.psw2
        });
        await patientDB.save();
        res.send(patientDB);
    }
});

module.exports = router;
