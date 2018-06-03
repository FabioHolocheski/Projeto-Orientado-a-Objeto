module.exports.servicos = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

	console.log(email)


	servicosModel.getServicos(function(error, result){		
		res.render("servicos/servicos", {servicos : result, email : email});
	});		

	
	

}



module.exports.servico = function(application, req, res){
var connection = application.config.dbConnection(application, req, res);
		var servicosModel = new application.app.models.ServicosDAO(connection);

		var id_servico = req.query;		

		var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

	console.log(email)

		servicosModel.getServico(id_servico, function(error, result){
			res.render("servicos/servico", {servico : result, email : email});
		});

}
