/* user schema*/
var mongoose = require('mongoose');
var cropSchema = new mongoose.Schema({	
	name : {type : String, required:"Crop's name is required."},
	description : {type : String},
	variety : {type : String},
	offer_price : {type : Number},
	offer_price_unit : {type : String},
	quantity : {type: Number},
	quatity_unit : {type: String},
	service_fee : {type: Number},
	service_fee_type : {type: String},
	discount_type : {type: String},
	discount_value : {type: Number,default:'10'},
	address_line1 : {type: String},
	address_line2 : {type: String},
	city : {type:String},
	state : {type: String},
	lat : {type: Number},
	lng:{type : Number},
	status :{type: Boolean, default:true},
	createdBy : {type : String},
	createdAt : {type : Date,default:Date.now()}
},{collection: 'crop'});

var crop = mongoose.model('crop',cropSchema);

module.exports = crop;