'use strict';
let cropModel = require('../models/crop');

/*
 * Function to add a new crop - 
*/
var addCrop = function(req,res){
    var errMsg = null;
    if(!req.payload.name){
        errMsg = "Crop's name is required.";
    }else if(!req.payload.variety){
        errMsg = "Crop's variety is required.";
    }else if(!req.payload.quantity){
        errMsg = "Crop's quantity is required.";
    }else if(!req.payload.variety){
        errMsg = "Crop's variety is required.";
    }else if(!req.payload.offer_price && !req.payload.offer_price_unit){
        errMsg = "Crop's price and its unit is required.";
    }
    if(errMsg){
        return res({'msg':errMsg}).code(400);
    }

    var newCrop = new cropModel(req.payload);
    newCrop.save(function(err,response){
        if(err){
            return res({'msg':'DB error','err':err}).code(400);
        }else{
            return res({'msg':'success','crop':response}).code(200);       
        }
    })            
}
exports.addCrop = addCrop;

var getAllCrops = function(req,res){
    cropModel.find({status:true}).sort({_id:-1}).exec(function(err,crops){
        if(err){
            return res({'msg':'DB error','err':err}).code(400);
        }else{
            return res({'msg':'success','crops':crops}).code(200);       
        }
    });
}
exports.getAllCrops = getAllCrops;