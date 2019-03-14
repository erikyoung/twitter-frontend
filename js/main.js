var weather; 
var api = 'http://api.openweathermap.org/data/2.5/weather?q='; 
var url = 'London';   
var apiKey = "&APPID=df5e505d294be3058dc0eccc363822b7"; 
var units = '&units=imperial'; 

var input; 

let button = document.getElementById('submit'); 
button.addEventListener('click', weatherAsk => {

}); 





function weatherAsk() {
	
	var url = api + input.value() + apiKey + units; 
	loadJSON(url, gotData);
}

function gotData(data) {
	//printLn(data);
	weather = data;  
}

function draw() {
	background(0); 
	if (weather) {
		ellipse(50,100,weather.main.temp, weather.main.temp); 
		ellipse(150,100,weather.main.humidity, weather.main.humidity); 
	}
}



