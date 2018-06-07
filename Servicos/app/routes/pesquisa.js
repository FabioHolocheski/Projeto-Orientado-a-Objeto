
module.exports = function(application){

	

	application.post('/pesquisa', function(req, res){
		application.app.controllers.pesquisa.pesquisa(application, req, res);

	});
	application.get('/pesquisa', function(req, res){
		application.app.controllers.pesquisa.pesquisa(application, req, res);

	});

	application.post('/pesquisa1', function(req, res){
		application.app.controllers.pesquisa.pesquisa1(application, req, res);

	});
	application.get('/pesquisa1', function(req, res){
		application.app.controllers.pesquisa.pesquisa1(application, req, res);

	});

	application.post('/pesquisa2', function(req, res){
		application.app.controllers.pesquisa.pesquisa2(application, req, res);

	});
	application.get('/pesquisa2', function(req, res){
		application.app.controllers.pesquisa.pesquisa2(application, req, res);

	});
	
	
	
};