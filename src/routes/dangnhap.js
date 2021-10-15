const express = require('express');

const router =  express.Router();

    const DangNhap = require('../app/controllers/DangNhap');

    // Newcontrollers.index();
    router.use('/DangNhap', DangNhap.Nhap);  
    router.use('/vay/DangNhap', DangNhap.Nhap);  
    
    router.use('/', DangNhap.search);


module.exports = router;