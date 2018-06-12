module.exports.pesquisa = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var servico = req.body.servico;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa(categoria, servico, function(error, result){		
		res.render("pesquisa/pesquisa", {servicos : result, email : email});
		
	});	


}

module.exports.pesquisa1 = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var servico = req.body.servico;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa1(categoria, function(error, result){		
		res.render("pesquisa/pesquisa", {servicos : result, email : email});
		
	});	


}


module.exports.pesquisa2 = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var servico = req.body.servico;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa2(servico, function(error, result){		
		res.render("pesquisa/pesquisa", {servicos : result, email : email});
		
	});	


}





	
