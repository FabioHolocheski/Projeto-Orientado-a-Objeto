
module.exports = function(application){


	application.post('/pesquisa3', function(req, res){
		application.app.controllers.pesquisaAdmin.pesquisaAdmin(application, req, res);

	});
	application.get('/pesquisa3', function(req, res){
		application.app.controllers.pesquisaAdmin.pesquisaAdmin(application, req, res);

	});

};