const express = require('express');

const router =  express.Router();

    const vaycontrollers = require('../app/controllers/vayControllers');

    // Newcontrollers.index();
    router.get('/create', vaycontrollers.create);
    router.get('/store', vaycontrollers.store);  
    
    router.get('/:slug', vaycontrollers.show);  
    
    


module.exports = router;