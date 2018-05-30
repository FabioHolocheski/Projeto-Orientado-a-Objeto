module.exports = function(application){
    
    application.get('/', function(req, res){
        application.app.controllers.login.login(application, req, res);
    });

    application.post('/', function(req, res){
        application.app.controllers.login.login(application, req, res);
    });


};