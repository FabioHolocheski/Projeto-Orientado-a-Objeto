module.exports = function(application){
    
    application.get('/novaconta', function(req, res){
        application.app.controllers.novaconta.novaconta(application, req, res);
    });

    application.post('/novaconta', function(req, res){
        application.app.controllers.novaconta.novaconta(application, req, res);
    });


};