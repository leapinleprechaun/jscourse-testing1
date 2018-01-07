function FizzBuzz() {
}

FizzBuzz.prototype.fizzbuzz = function () {
	var arr = [];
	for(var i = 1; i<100; i++ ){
		arr.push(this.print(i));
	}
	return arr;
}

FizzBuzz.prototype.print = function (num) {
		if(num % 3 === 0 && num % 5 === 0) {
			return 'fizzbuzz';
		} else if(num % 3 === 0){
			return 'fizz';
		} else if (num % 5 === 0) {
			return 'buzz';
		} else {
			return num;
		}
	}

	var newGame = new FizzBuzz(),
			result = newGame.fizzbuzz().join(',<br/>');

if(document.getElementById('answer')){
	document.getElementById('answer').innerHTML = result;
}

