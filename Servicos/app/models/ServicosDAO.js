function ServicosDAO(connection){
	this._connection = connection;

}

ServicosDAO.prototype.getServicos = function(callback){
		this._connection.query('select * from servico order by data_criacao desc', callback);
}

ServicosDAO.prototype.getServico = function(id_servico, callback){
		this._connection.query('select * from servico where id_servico = '+id_servico.id_servico, callback);
}

ServicosDAO.prototype.salvarServico = function(servico, callback){
		this._connection.query('insert into servico set ?', servico, callback)
}



module.exports = function(){
	return ServicosDAO;
}