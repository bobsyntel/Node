
var http = require('http');
var fs = require('fs')
module.exports  = function(req, res){

if(req.url === '/'){
	fs.readFile('./tictactoe.html', 'utf8',(err,contents)=>{
			// response.write(contents);
			res.writeHead(200,{'content-type':'text/html'});
			res.write(contents);
			res.end();
		});
	}
	else if (req.url === './dragon.png'){
		// fs.readFile('./index.html', 'utf8',(err,contents)=>{
			// response.write(contents);
			fs.readFileSync('dragon.png')
			res.writeHead(200,{'content-type':'image/png'});
			// res.write(contents);
			res.end();
		// });
	}

	// fs.readFile()
		

	}


