
module.exports = function(application){

	application.get('/servicos', function(req, res){
		application.app.controllers.servicos.servicos(application, req, res);
	});

	application.get('/servico', function(req, res){
		application.app.controllers.servicos.servico(application, req, res);
	});
	
	
};