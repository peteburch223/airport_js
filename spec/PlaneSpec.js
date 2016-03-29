describe("Plane", function(){

  var plane;
  var airport = jasmine.createSpy('Airport');

  beforeEach(function(){
    plane = new Plane();
  });

  describe("#takeoff", function(){
    it('raises an error if already flying', function(){
      expect(function(){plane.takeoff()}).toThrow('Plane is already flying');
    });
  });

  describe("#land", function(){
    it('raises an error if already landed', function(){
      plane.land(airport);
      expect(function(){plane.land(airport)}).toThrow('Plane is already landed');
    });

    it('stores the airport the plane landed at', function(){
      plane.land(airport);
      expect(plane.airport()).toEqual(airport);
    });
  });

  describe("#airport", function(){
    it('raises an error if already flying', function(){
    expect(function(){plane.airport()}).toThrow('Plane cannot be at an airport: plane already flying');
    });
  });
});
