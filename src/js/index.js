function App() {

}

App.prototype.returnAverage = function () {
	var start = 0,
			reducedToOneValue;
		reducedToOneValue	 = _.reduce(arguments, function (memo, arg) {
		return memo + arg;
	}, start);
	return arguments.length ? reducedToOneValue/arguments.length: reducedToOneValue;
}

App.prototype.add2Numbers = function (num1, num2) {
	return num1 + num2;
}

App.prototype.checkPalindrome = function (string) {
	var stringArr = string.split(''),
			reversed = [];
	for(var i = stringArr.length-1; i>=0; i--){
		reversed.push(stringArr[i]);
	}
	return string === reversed.join('');
}

