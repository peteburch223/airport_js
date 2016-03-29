describe("Airport", function(){

  var airport;

  beforeEach(function(){
    airport = new Airport();
    airport.init();
  });

  describe("#land", function(){
    beforeEach(function(){
      plane = {
        land: function(){}
      };
      spyOn(plane,'land');
    });

    describe("when not stormy", function(){
      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0);
      });
      it('instructs a plane to land', function(){
        expect(plane.land.calls.any()).toEqual(false);
        airport.land(plane);
        expect(plane.land.calls.any()).toEqual(true);
      });
    });

    describe("when full", function(){
      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0);
        var times = 20;
        for(var i=1; i <= times; i++){
        airport.land(plane);
        }
      });
      it('raises an error', function(){
        expect(function(){airport.land(plane)}).toThrow('Cannot land plane: airport full');
      });
    });

    describe("when stormy", function(){
      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0.9);
      });
      it('raises an error', function(){
        expect(function(){airport.land(plane)}).toThrow('Cannot land plane: weather is stormy');
      });
    });
  });
});
