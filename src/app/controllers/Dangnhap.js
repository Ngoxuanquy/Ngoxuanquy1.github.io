
const Courst = require('../models/Courst');

// const { mutipleMongooseToOject }  = require("../../unti/mongoose");



class DangNhap {
        Nhap(req , res){

        res.render('DangNhap');
    }
    search(req, res){
        res.render('search');
    }
}
        module.exports = new DangNhap();