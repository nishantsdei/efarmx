'use strict';

const cropController = require('../controllers/crop');
const Joi = require('joi');
/*
 * Defining routes to be used in server.js
*/
module.exports = [{
    method: 'Post',
    path: '/addCrop',
    config: {
        handler: cropController.addCrop,
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        },
        validate:{
            payload: { 
                name: Joi.string().required(), 
                variety: Joi.string().required(),
                offer_price: Joi.number().required(),
                quantity: Joi.number().required()
            }
        },
        description: 'Add Crop',
        notes: 'Creates a new entry in DB.',
        tags: ['api','crop'] 
    }
},{
    method: 'Get',
    path: '/crops',
    config: {
        handler: cropController.getAllCrops,
        description: 'Get crops',
        notes: 'Returns a list of crops',
        tags: ['api'], // ADD THIS TAG
    }
}

];