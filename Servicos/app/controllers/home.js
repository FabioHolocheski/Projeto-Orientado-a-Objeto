module.exports.home = function( application, req, res){
	
	var dadosForm = req.body;
	var email = req.body.emailInput;
	var senha = req.body.passwordInput;



	res.render("home/index", {email : email, senha : senha});
	
}







