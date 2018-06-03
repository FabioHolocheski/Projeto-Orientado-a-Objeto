
module.exports.meusservicos = function(application, req, res){
var connection = application.config.dbConnection(application, req, res);
		var servicosModel = new application.app.models.ServicosDAO(connection);

		var id_servico = req.query;	
		
		var dadosForm = req.body;
		var email = req.body.emailInput;
		var senha = req.body.passwordInput;



		servicosModel.getServico(id_servico, function(error, result){
			res.render("meusservicos/meusservicos", {meusservicos : result, email : email});
		});

}
