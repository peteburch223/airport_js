function Plane(){
  this.flying = true;
};

Plane.prototype.takeoff = function(){
  if (this.flying) {
    throw 'Plane is already flying';
  };
  this.flying = true;
};
Plane.prototype.land = function(airport){
  if (!this.flying) {
    throw 'Plane is already landed';
  };
  this.flying = false;
  this._airport = airport;
};

Plane.prototype.airport = function(){
  if (this.flying) {
    throw 'Plane cannot be at an airport: plane already flying';
  };
  return this._airport
};
