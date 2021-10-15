const newRouters = require('./new'); 
const siteRouters = require('./site');  
const vayRouters = require('./Vay');  



function routes(app) {

  app.use('/new' , newRouters);
  app.use('/Vay' , vayRouters);

  app.use('/' ,siteRouters );
    
    
    
}

module.exports =  routes;