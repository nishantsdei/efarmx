var mongoose=require('mongoose');

mongoose.connection;
mongoose.connect('mongodb://localhost/efarmx');

module.exports = mongoose;