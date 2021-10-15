class Newcontrollers {

    index(req , res) {
        res.render('new');
    }

    show(req, res){
        res.send('New New');
    }

}

module.exports = new Newcontrollers;