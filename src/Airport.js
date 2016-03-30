function Airport(){
};

Airport.prototype.init = function(capacity = 20){
  this._weatherReporter = WeatherReporter.createInstance();
  this.planes = [];
  this._capacity = capacity;
};

Airport.prototype.land = function(plane){
  if (this._isStormy()) {
    throw 'Cannot land plane: weather is stormy';
  };
  if (this._isFull()) {
    throw 'Cannot land plane: airport full';
  };
  plane.land(this);
  this._addPlane(plane);
};

Airport.prototype.take_off = function(plane){
  if (this._isStormy()) {
    throw 'Cannot take off plane: weather is stormy';
  };
  if (this._isNotAtAirport(plane)) {
    throw 'Cannot take off plane: plane not at this airport';
  };
  plane.take_off();
  this._removePlane();
  return plane;
};

Airport.prototype._isNotAtAirport = function(plane){
  return this.planes.indexOf(plane) == -1;
};

Airport.prototype._isStormy = function(){
  return this._weatherReporter.isStormy();
};

Airport.prototype._isFull = function(){
  return this.planes.length >= this._capacity;
};

Airport.prototype._addPlane = function(plane){
  this.planes.push(plane);
};

Airport.prototype._removePlane = function(plane){
  this.planes.pop(plane);
};
