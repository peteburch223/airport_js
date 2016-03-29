describe("WeatherReporter", function(){

  beforeEach(function(){
    weatherReporter = new WeatherReporter();
  });

  describe("#stormy - not stormy", function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });
    it('can be non-stormy', function(){
      expect(weatherReporter.isStormy()).toEqual(false);
    });
  });

  describe("#stormy - stormy", function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0.9);
    });
    it('can be stormy', function(){
      expect(weatherReporter.isStormy()).toEqual(true);
    });
  });
});
