function Airport(){
};

Airport.prototype.init = function(){
  this._weatherReporter = WeatherReporter.createInstance();
  this.planes = [];
};

Airport.prototype.land = function(plane){
  if (this._isStormy()) {
    throw 'Cannot land plane: weather is stormy';
  };
  if (this._isFull()) {
    console.log('should be throwing error');
    throw 'Cannot land plane: airport full';
  };
  plane.land(this);
  this._addPlane(plane);
};

Airport.prototype._isStormy = function(){
  return this._weatherReporter.isStormy();
};

Airport.prototype._isFull = function(){
  return this.planes.length >= 20;
};

Airport.prototype._addPlane = function(plane){
  this.planes.push(plane);
};
