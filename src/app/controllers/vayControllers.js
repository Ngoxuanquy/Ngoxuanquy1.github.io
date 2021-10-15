
const Courst = require('../models/Courst');

const { mongooseToOject }  = require("../../unti/mongoose");


    function click(){
        var a = document.getElementById('giohang');
        console.log(a);
    }



class vayControlers {
        show(req , res){
            Courst.findOne({ slug: req.params.slug })
                .then((trang_chu) => {
                    res.render('vay1' , {
                        trang_chu: mongooseToOject(trang_chu)
                    });
                })
           .catch();
    }
    
    create(req , res , next){
        res.render('course/create');
        }

        store(req , res , next ){
                res.json(req.body)
           }    
    }

        module.exports = new vayControlers();