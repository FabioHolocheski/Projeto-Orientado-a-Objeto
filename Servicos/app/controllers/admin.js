module.exports.formulario_inclusao_servico = function(application, req, res){
	res.render("admin/form_add_servico",{validacao:{}, servico : {}});
}

module.exports.noticias_salvar = function(application, req, res){
	var servico = req.body;	

		req.assert('titulo','O título é obrigatório').notEmpty();
		req.assert('descricao','A descrição é obrigatória').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_add_servico", {validacao : erros, servico : servico});
			return;
		}

		var connection = application.config.dbConnection();
		var servicosModel = new application.app.models.ServicosDAO(connection);

		servicosModel.salvarServico(servico, function(error, result){
			res.redirect('/servicos');
			});		
		

}