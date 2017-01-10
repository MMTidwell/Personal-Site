"use strict";

$(document).ready(function(){
	// ================= Variables ===========================
	// my api for openweathermap.org
	const myAPIKey = "AIzaSyBYgI0JJFkVB4U8iC-sOL4dgGZGY8rbCFA";

	var days = 6;
	var markerLat = 39.8282
	var markerLng = -98.5795
	var infowindow;

	// ================= Wind Direction ===========================
	// checks the value and return boolean for windDirection(deg)
	function inRange(min, max, value){
		return (value >= min && value <= max)
	}

	// takes wind degree and change it to direction
	function windDirection(deg){
		if (inRange(348.75, 33.75, deg)){
			return "N"
		} if (inRange(33.75, 78.75, deg)){
			return "NE"
		} if (inRange(78.75, 123.75, deg)){
			return "E"
		} if (inRange(123.75, 168.75, deg)){
			return "SE"
		} if (inRange(168.75, 213.75, deg)){
			return "S"
		} if (inRange(213.75, 258.75, deg)){
			return "SW"
		} if (inRange(258.75, 303.75, deg)){
			return "W"
		} if (inRange(303.75, 326.25, deg)){
			return "NW"
		}
	}

	// ================ Current Weather ==========================
	// gathers info from openweathermap.org and places it in HTML
	function weatherInfo(weatherData){
		//	name =	get().location in object.var called
		var city = weatherData.name;
		// date
		var dt = weatherData.dt;
		var day = new Date(dt * 1000);
		var date = day.toDateString();
		// icon
		var icon = weatherData.weather[0].icon;
		// temp
		var currentTemp = Math.round(weatherData.main.temp) + "º F";
		var temp = Math.round(weatherData.main.temp_min) + "º F / " + Math.round(weatherData.main.temp_max) + "º F";
		// all other
		var description = weatherData.weather[0].description;
		var humidity = weatherData.main.humidity + "%";
		var windDir = windDirection(weatherData.wind.deg);
		var wind = weatherData.wind.speed + " mph";
		var pressure = Math.round(weatherData.main.pressure * 0.02952998751) + " inHG";

		// assigns info to area in HTML
		$("#cityName").text(city);
		$("#date").text(date)
		$("#icon").attr("src", ("http://openweathermap.org/img/w/" + icon + ".png"));
		$("#temp").text(currentTemp);
		$("#daily-temp").text(temp);
		$("#description").text(description);
		$("#humidity").text(humidity);
		$("#wind").text(wind + " " + windDir);
		$("#pressure").text(pressure);
	}

	// ================= Pop Up Window ========================
	function setWindow(weatherData){
		var city = weatherData.name;
		var icon = weatherData.weather[0].icon;
		var currentTemp = Math.round(weatherData.main.temp) + "º F";
		var temp = Math.round(weatherData.main.temp_min) + "º F / " + Math.round(weatherData.main.temp_max) + "º F";

		var div = "<div>" + city + "</div>" +"<img src='http://openweathermap.org/img/w/" + icon + ".png'>" + "<div>" + currentTemp + "</div>" + "<div>" + temp + "</div>" + "</div>"
		infowindow.setContent(div)
	}

	// ==================== Map ============================
	// builds map
	function initMap(){
		// places map, sets zoom and centers
		var map = new google.maps.Map(document.getElementById("map_area"), {
			zoom: 4,
			center: {
				lat: markerLat,
				lng: markerLng
			}
		});

		// sets marker on map
		var marker = new google.maps.Marker({
			position: {
				lat: markerLat,
				lng: markerLng
			},
			map: map,
			// allows pin to move
			draggable: true,
			animation: google.maps.Animation.DROP
		});

		// adds window box
		infowindow = new google.maps.InfoWindow({
			content: ""
		})
		infowindow.open(map, marker);

		// allows user to move pin (seems to work without it...)
		google.maps.event.addListener(marker, "mouseup", function(event){
			// setting empty array and getting lat and lng
			var markerPosition = []
			markerPosition[0] = this.position.lat();
			markerPosition[1] = this.position.lng();

			// assigning lat and lng in input boxes above map
			$("#lat").val(markerPosition[0]);
			$("#lng").val(markerPosition[1]);
		});

		google.maps.event.addListener(marker, "mouseup", function(){
			markerLat = $("#lat").val();
			markerLng = $("#lng").val();
			$('#next_day').html('');
			forecast();
			nextDay();
		});
	}

	// places map in browser
	var map = new google.maps.Map(document.getElementById("map_area"), initMap);


// ================ AJAX Current Weather =========================
	function forecast(){
		// gets data object from openweathermap.org and sends it to weatherInfo function
		$.get("http://api.openweathermap.org/data/2.5/weather", {
			APPID: myAPIKey,
			// gets lat and lng
			lat: markerLat,
			lon: markerLng,
			// sets the temp to F
			units: "imperial"
		}).done(function(weatherData){
			weatherInfo(weatherData)
			setWindow(weatherData)
		}).fail(function(){
			alert("Error loading weather")
		});
	}

	// ============= AJAX Forecast Weather ======================
	function nextDay(){
		$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
			APPID: myAPIKey,
			// gets lat and lng
			lat: markerLat,
			lon: markerLng,
			// sets the temp to F
			units: "imperial",
			cnt: days
			}).done(function(weatherData){
				weatherData.list.slice(1).forEach(function(days, index){
					var div = "<div id='rows'>";
					var dt = days.dt;
					var day = new Date(dt * 1000);
					var date = day.toDateString();

					var icon = days.weather[0].icon;
					var temp = Math.round(days.temp.min) + "ºF / " + Math.round(days.temp.max) + "ºF";

					div += "<div>" + date + "</div>" + "<img src='http://openweathermap.org/img/w/" + icon + ".png'>" + "<div>" + temp + "</div>" + "</div>"

					$("#next_day").append(div);
				});

			}).fail(function(){
				alert("Error loading weather")
			});
		};

// ================= Run Before Page Load ===========================
console.log('running on page load')
forecast();
nextDay();
initMap();

});

