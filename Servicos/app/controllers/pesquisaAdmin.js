module.exports.pesquisaAdmin = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;

	var categoria = req.body.categoria;
	var usuario = req.body.usuario;

	var email = req.body.emailInput;
	var senha = req.body.passwordInput;


	servicosModel.pesquisa3(usuario, function(error, result){		
		res.render("pesquisaAdmin/pesquisaAdmin", {servicos : result, email : email});
		
	});	


}





	
