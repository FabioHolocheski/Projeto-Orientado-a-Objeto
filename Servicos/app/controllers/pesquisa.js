module.exports.pesquisa = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var descricao = req.body.descricao;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa(categoria, descricao, function(error, result){		
		res.render("pesquisa/pesquisa", {servicos : result, email : email});
		
	});	


}

module.exports.pesquisa1 = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var descricao = req.body.descricao;

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
	var descricao = req.body.descricao;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa2(descricao, function(error, result){		
		res.render("pesquisa/pesquisa", {servicos : result, email : email});
		
	});	


}





	
