module.exports = function(application){
	application.get('/formulario_inclusao_servico', function(req, res){
		application.app.controllers.admin.formulario_inclusao_servico(application, req, res);
	});

	application.post('/formulario_inclusao_servico', function(req, res){
		application.app.controllers.admin.formulario_inclusao_servico(application, req, res);
	});

	application.post('/servicos/salvar', function(req, res){
		application.app.controllers.admin.servico_salvar(application, req, res);

	});
	application.get('/servicos/salvar', function(req, res){
		application.app.controllers.admin.servico_salvar(application, req, res);

	});


};