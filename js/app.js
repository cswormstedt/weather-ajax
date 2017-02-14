console.log('yo');


var id = prompt('Enter Zip');
var response = {};
$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + id + ',us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98',
  	type: "GET",
  	dataType: 'json',
  	
  	success: function(data) {
  	response = data;
  	var body = document.getElementsByTagName('body')[0];
  	var main = document.createElement('div');
  	main.setAttribute('class', 'main');
  	body.appendChild(main);
  	var location = document.createElement('h1');
  	var city = response.name;
  	location.innerHTML = city;
  	main.appendChild(location);
  	var weatherHead = document.createElement('h2');
  	var weatherMain = response.weather[0].description;
  	weatherHead.innerHTML = weatherMain;
  	main.appendChild(weatherHead);
  	var bigTemp = document.createElement('div');
  	bigTemp.setAttribute('class', 'mainTemp')
  	var maxLow = document.createElement('div');
	var temp = response.main.temp;
	var max = response.main.temp_max;
	var min = response.main.temp_min;
	var tempMax = document.createElement('h3')
	var tempMin = document.createElement('h3');
	tempMax.innerHTML = ('Max ' + max + '&deg;');
	tempMin.innerHTML = ('Low ' + min + '&deg;');
	maxLow.innerHTML = tempMax.innerHTML + ' ' + tempMin.innerHTML;
  	bigTemp.innerHTML = (temp + '&deg;');
  	main.appendChild(bigTemp);
  	main.appendChild(maxLow);
  	var weatherImg = document.createElement('div');
  	var background = document.createElement('img');
  		if ( weatherMain === "clear sky"){
  			background.setAttribute('src', 'http://openweathermap.org/img/w/01d.png');
  	} else if(weatherMain === "few clouds"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/02d.png');
  	} else if(weatherMain === "snow"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/10d.png');

  	} else if(weatherMain === "overcast clouds" || "broken clouds"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/04d.png');
  		
  	} else if(weatherMain === "rain"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/10d.png');
  		
  	} else if(weatherMain === "thunderstorm"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/11d.png');	
  	} else if(weatherMain === "scattered clouds"){
  		background.setAttribute('src', 'http://openweathermap.org/img/w/03d.png')
  	}else {
  		null;
  	};	

  	weatherImg.appendChild(background);
  	main.appendChild(weatherImg);
  },
  
  fail: function(error){
	console.log(error)
  }

});