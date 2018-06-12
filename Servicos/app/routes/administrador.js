module.exports = function(application){
	application.get('/administrador', function(req, res){
		application.app.controllers.administrador.administrador(application, req, res);
	});

	application.post('/administrador', function(req, res){
		application.app.controllers.administrador.administrador(application, req, res);
	});

	

};