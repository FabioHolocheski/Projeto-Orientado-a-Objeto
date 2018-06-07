function ServicosDAO(connection){
	this._connection = connection;

}

ServicosDAO.prototype.getServicos = function(callback){
		this._connection.query('select * from servico order by data_criacao desc', callback);
}

ServicosDAO.prototype.getServico = function(id_servico, callback){
		this._connection.query('select * from servico where id_servico = '+id_servico.id_servico, callback);
}


ServicosDAO.prototype.deletarServicos = function(id_servico, callback){
	this._connection.query('delete from servico where id_servico = '+id_servico.id_servico, callback);
}

ServicosDAO.prototype.mostrarServicos = function(email, callback){
		this._connection.query('select * from servico where usuario = "'+email+'"', callback);
}

ServicosDAO.prototype.pesquisa = function(categoria, descricao, callback){
		this._connection.query('select * from servico where categoria = "'+categoria+'" and descricao LIKE "%'+descricao+'%"',callback );
}

ServicosDAO.prototype.pesquisa2 = function(descricao, callback){
	this._connection.query('select * from servico where descricao LIKE "%'+descricao+'%"',callback );
}

ServicosDAO.prototype.pesquisa1 = function( categoria, callback){
	this._connection.query('select * from servico where categoria = "'+categoria+'"',callback );
}

ServicosDAO.prototype.salvarServico = function(servico, callback){
		this._connection.query('insert into servico set ?', servico, callback)
}



module.exports = function(){
	return ServicosDAO;
}