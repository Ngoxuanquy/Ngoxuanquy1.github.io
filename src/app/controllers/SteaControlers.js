
const Courst = require('../models/Courst');

const { mutipleMongooseToOject }  = require("../../unti/mongoose");



class SteaControlers {
        index(req , res){
            Courst.find({} , function(err , courst) {
            if(!err)  {
                //  courst = courst.map(courst => courst.toObject());
                res.render('home', {
                    // courst
                    courst: mutipleMongooseToOject(courst)
                });
                   }
                   else {
                       res.status(400).json({error: 'loi'});
                   }
        });
        // res.render('home');
    }
    
    dn(req, res){
        res.render('DangNhap');
    }
    dk(req, res){
        res.render('DangKi');
    }
    giohang(req , res){
        res.render('GioHang');
        
       
    }
    
   
}
        module.exports = new SteaControlers();