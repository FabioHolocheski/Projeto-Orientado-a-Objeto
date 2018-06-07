
module.exports.meusservicos = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

	servicosModel.mostrarServicos(email, function(error, result){		
		res.render("meusservicos/meusservicos", {servicos : result, email : email});

	});	


}



module.exports.servico_deletar = function(application, req, res){
	var servico = req.body;	
	var id_servico = req.query;
	
		var connection = application.config.dbConnection();
		var servicosModel = new application.app.models.ServicosDAO(connection);

		servicosModel.deletarServicos(id_servico, function(error, result){
			
			});		
		

			
}