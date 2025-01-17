const express = require('express');
const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert=(req,res)=>{
    let {sName,sEmail,sPhone,sMessage}=req.body;
    let enquiry=new enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    });
    enquiry.save().then(()=>{
        res.send({status:1, message:"Enquiry Saved successfully"});
    }).catch((err)=>{
        res.send({status:0, message:"Error while saving enquiry", error:err});
    })
   
}

module.exports = {enquiryInsert}
