const express = require('express');

const router =  express.Router();

    const siteontrollers = require('../app/controllers/SteaControlers');

    // Newcontrollers.index();
    router.use('/DangNhap', siteontrollers.dn);  
    router.use('/DangKi', siteontrollers.dk); 
    router.use('/GioHang', siteontrollers.giohang);  

    
    router.use('/', siteontrollers.index);


module.exports = router;