var weather;
var y;
var API_KEY = "779eb92e112e8d023e9d1283ab60343c";
var LAT_LON = "37.8267,-122.4233";
var req = "https://api.darksky.net/forecast/" + API_KEY + "/" + LAT_LON + "?exclude=minutely";

function preload() {
  weather = loadJSON(req, "jsonp");
  wet = loadImage("wet.jpeg");

}

function setup() {
  
   y += 80
  createCanvas(600, 600);
   background(255);
  textSize(15);
  text(CENTER);
image(wet,200,0,800,400);


  
  stroke(250,120,0);
  strokeWeight(6);

  for (var i = 0; i < weather.daily.data.length; i++) 
  {
    var current = weather.daily.data[i];

    text(moment.unix(current.time).format('dddd'), 50, 100+50*i);
    text(current.temperatureHigh, 160, y);
    text(current.dewPoint, 320, y);
    text(current.humidity, 380, y); 
    text(current.precipProbability, 320, y);
    text("Tempature", 60, 20);
    text("High", 160, 60);
    text("Low", 310, 60);
    text("Dew", 370, 60);
    text("Precipitation", 320, 20);
    text("Day", 50, 60);

 
  

}
  
}

function draw() {

}










