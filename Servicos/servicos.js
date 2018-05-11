var http = require('http');

var server = http.createServer(function(req,res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>noticias tecnologia</body></html>");
	}else{

	res.end("<html><body>SERVIÇOS</body></html>");
}
});

server.listen(3000);