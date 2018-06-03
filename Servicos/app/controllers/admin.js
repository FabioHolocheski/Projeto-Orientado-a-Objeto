module.exports.formulario_inclusao_servico = function(application, req, res){
	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

	res.render("admin/form_add_servico",{validacao:{}, servico : {}, email : email, senha : senha});


}

module.exports.servico_salvar = function(application, req, res){
	var servico = req.body;	
	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;

		

		var connection = application.config.dbConnection();
		var servicosModel = new application.app.models.ServicosDAO(connection);

		servicosModel.salvarServico(servico, function(error, result){
			
			
			});		
		

			
			//res.redirect('back');	
}