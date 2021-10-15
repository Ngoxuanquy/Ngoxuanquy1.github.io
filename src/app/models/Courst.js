const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const ObjectId = Schema.ObjectId;

const Courst = new Schema({
  name: { type: String , maxLength: 255 },
  Gia: { type: String, maxLength : 255 },
  anh: { type : String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}); 
// console.log(Counrst);
module.exports = mongoose.model('Courst', Courst , 'trang_chu' );