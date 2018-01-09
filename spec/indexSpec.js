describe("Working with numbers", function() {
  var app;

  beforeEach(function() {
    app = new App();
  });
  afterEach(function () {
    app = null;
  });

  describe('mini calculator', function (){
    it('should add 2 arguments', function(){
      expect(app.add2Numbers(2,2)).toEqual(4);
      expect(app.add2Numbers(2,5)).toEqual(7);
    })
  })


  describe('Returns the average of any number of supplied values', function () {
    it('should give me the average of 2 numbers', function () {
      expect(app.returnAverage(5,7)).toEqual(6);
    });

    it('should return 0 if no numbers are supplied', function () {
      expect(app.returnAverage()).toEqual(0);
    });

  });

  describe('spot the palindrome', function () {
    it('should return true if the word is the same forwards as it is backwards', function () {
      expect(app.checkPalindrome('tacocat')).toEqual(true);
    });
    it('if the word is not a palindrome it should return false', function(){
      expect(app.checkPalindrome('spaghetti')).toEqual(false);
    });
  }); 

});
