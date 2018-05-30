module.exports = function(application){	

	application.post('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	
	
};


