const http = require('http');

const apikey = 'e312dbeb8840e51f92334498a261ca1d';;
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;;

const request = http.get(weatherUrl,(theResponse)=>{
		console.log(theResponse);
		let weatherData  ='';
		theResponse.on('data',(chunkOfData)=>{
			console.log(chunkOfData);
			console.log('\n');
			weatherData += chunkOfData;
		});

		theResponse.on('end',()=>{
			console.log(typeof(weatherData))
			console.log(weatherData);
			console.log(JSON.parse(weatherData));
		})

})