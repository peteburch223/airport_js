function WeatherReporter(){
};

WeatherReporter.prototype.isStormy = function(){
  return Math.random() > 0.75;
};

WeatherReporter.createInstance = function(){
  return new WeatherReporter();
};
