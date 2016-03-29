function Plane(){
  this.flying = true;
};

Plane.prototype.takeoff = function(){
  if (this.flying) {
    throw 'Plane is already flying';
  };
};
Plane.prototype.land = function(){
  console.log(this.flying)
  if (!this.flying) {
    throw 'Plane is already landed';
  };
};
