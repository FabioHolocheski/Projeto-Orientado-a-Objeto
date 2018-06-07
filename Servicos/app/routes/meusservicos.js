module.exports = function(application){

    application.get('/meusservicos', function(req, res){
		application.app.controllers.meusservicos.meusservicos(application, req, res);
	});

	application.post('/meusservicos', function(req, res){
        application.app.controllers.meusservicos.meusservicos(application, req, res);
    });
    
    application.post('/meusservicos/del', function(req, res){
        application.app.controllers.meusservicos.servico_deletar(application, req, res);
    });
    application.get('/meusservicos/del', function(req, res){
        application.app.controllers.meusservicos.servico_deletar(application, req, res);
    });


    

};