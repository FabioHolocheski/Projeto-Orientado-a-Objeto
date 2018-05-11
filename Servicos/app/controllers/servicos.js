module.exports.servicos = function(application, req, res){
	var connection = application.config.dbConnection();
	var servicosModel = new application.app.models.ServicosDAO(connection);

	servicosModel.getServicos(function(error, result){
		res.render("servicos/servicos", {servicos : result});
	});		

}

module.exports.servico = function(application, req, res){
var connection = application.config.dbConnection(application, req, res);
		var servicosModel = new application.app.models.ServicosDAO(connection);

		var id_servico = req.query;
		

		servicosModel.getServico(id_servico, function(error, result){
			res.render("servicos/servico", {servico : result});
		});

}
