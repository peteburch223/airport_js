describe("Airport", function(){

  var airport;

  beforeEach(function(){
    airport = new Airport();
    airport.init();
    plane = {
      land: function(){},
      take_off: function(){}
    };
  });

  describe("#land", function(){
    beforeEach(function(){
      spyOn(plane,'land');
    });

    describe("when not stormy", function(){
      beforeEach(function(){
        spyOn(airport,'_isStormy').and.returnValue(false);
      });
      it('instructs a plane to land', function(){
        expect(plane.land.calls.any()).toEqual(false);
        airport.land(plane);
        expect(plane.land.calls.any()).toEqual(true);
      });
    });

    describe("when full", function(){
      beforeEach(function(){
        spyOn(airport,'_isStormy').and.returnValue(false);
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
        spyOn(airport,'_isStormy').and.returnValue(true);
      });
      it('raises an error', function(){
        expect(function(){airport.land(plane)}).toThrow('Cannot land plane: weather is stormy');
      });
    });
  });

  describe("#take_off", function(){
    describe("when not stormy", function(){
      beforeEach(function(){
        spyOn(airport,'_isStormy').and.returnValue(false);
        spyOn(plane,'take_off');
      });
      it('instructs a plane to take_off', function(){
        airport.land(plane);
        expect(plane.take_off.calls.any()).toEqual(false);
        airport.take_off(plane);
        expect(plane.take_off.calls.any()).toEqual(true);
      });

      it('returns the plane that took off', function(){
        airport.land(plane);
        expect(airport.take_off(plane)).toEqual(plane);
      });

      it('raises an error if plane is not at this airport', function(){
        other_airport = new Airport;
        other_airport.init();
        other_airport.land(plane);
        expect(function(){airport.take_off(plane)}).toThrow('Cannot take off plane: plane not at this airport');
      });
    });
    describe("when stormy", function(){
      beforeEach(function(){
          airport.land(plane);
          spyOn(airport,'_isStormy').and.returnValue(true);
      });
      it('raises an error', function(){
      expect(function(){airport.take_off(plane)}).toThrow('Cannot take off plane: weather is stormy');
      });
    });
  });
  describe("#planes", function(){
    beforeEach(function(){
      spyOn(airport,'_isStormy').and.returnValue(false);
    });
    it('returns planes at the airport', function(){
      airport.land(plane);
      expect(airport.planes.indexOf(plane) == -1).toBe(false);
    });
    it('does not return planes that have taken off', function(){
      airport.land(plane);
      airport.take_off(plane);
      console.log(airport.planes);
      expect(airport.planes.indexOf(plane) == -1).toBe(true);
    });
  });

});
