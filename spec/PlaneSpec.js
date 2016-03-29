describe("Plane", function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
  //  airport = new Airport();
  });

  describe("#takeoff", function(){
    it('raises an error if already flying', function(){
      console.log(plane.flying);
    expect(function(){plane.takeoff()}).toThrow('Plane is already flying');
    });
  });

  describe("#land", function(){
    it('raises an error if already landed', function(){
      console.log(plane);
      plane.flying = false;
      console.log(plane.flying);
      expect(function(){plane.land()}).toThrow('Plane is already landed');
    });
  });
});
