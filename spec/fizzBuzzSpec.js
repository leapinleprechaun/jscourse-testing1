describe("FizzBuzz game", function() {
  var game;

  beforeEach(function() {
    game = new FizzBuzz();
  });
  afterEach(function () {
    game = null;
  })

  it('should loop through numbers 1 to 100', function () {
    var result = game.fizzbuzz();
    expect(result.length).toEqual(99);
  });

  it('should return numbers for anything that isn\'t divisible by 3', function () {
    var result = game.fizzbuzz();
    expect(result[1]).toEqual(2);    
  })

  it('the loop should return fizz for multiples of 3', function () {
    var result = game.fizzbuzz();
    expect(result[2]).toEqual('fizz');
    expect(result[5]).toEqual('fizz');
  })

  it('should print Buzz for any multiples of 5', function () {
    var result = game.fizzbuzz();
    expect(result[4]).toEqual('buzz');
  })

  it('should print fizzbuzz if its both divible by 5 and 3', function () {
    var result = game.fizzbuzz();
    expect(result[14]).toEqual('fizzbuzz');    
    expect(result[29]).toEqual('fizzbuzz');    
  })

  // it('should be able to accept a argument for the numbers it loops', function () {

  // });

});
