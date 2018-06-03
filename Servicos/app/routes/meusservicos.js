module.exports = function(application){

application.get('/meusservicos', function(req, res){
    application.app.controllers.meusservicos.meusservicos(application, req, res);
});

application.post('/meusservicos', function(req, res){
    application.app.controllers.meusservicos.meusservicos(application, req, res);
});

};