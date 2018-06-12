module.exports.administrador = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

	servicosModel.getServicos(function(error, result){		
		res.render("administrador/administrador", {servicos : result, email : email});
	});		


}




