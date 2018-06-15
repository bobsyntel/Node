const http = require('http');
const fs = require('fs');
// console.log(http)
// const static_contents = require('./static');
const server = http.createServer((request , response)=>{
		console.log('inside create server');	
		console.log(request.url);

	if(request.url === '/'){
			fs.readFile('./tictactoe.html', 'utf8',(err,contents)=>{
			// response.write(contents);
			response.writeHead(200,{'content-type':'text/html'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/ttt.css'){
			console.log("in css")
			fs.readFile('./ttt.css','utf8',(err,contents)=>{
				response.writeHead(200, {'content-type': 'text/css'});
				response.write(contents);
				response.end();
			})
	}else if(request.url === '/tictactoe.js'){
		console.log("in javascript")
		fs.readFile('./tictactoe.js','utf8',(err,contents)=>{
			response.writeHead(200, {'content-type': 'text/javascript'});
				response.write(contents);
				response.end();
		})
	}
	else if(request.url === '/dragon.png'){
		// const img = fs.readFileSync('dragon.png');
		console.log("in images")
		console.log(request.url)
		fs.readFile('./dragon.png',(err, contents)=>{
			response.writeHead(200, {'content-type': 'image/png'});
			response.write(contents);
			response.end();

		})
		
		
		// response.end(img);
	}
	else{
		console.log(request.url+  ' not found')
		response.end('Page not found');
	}
	
		
	
})

server.listen(7000);
console.log("listening on port 7000")