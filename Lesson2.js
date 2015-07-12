var i, sum = 0;
var allArguments = process.argv;
var allArgumentsLength = allArguments.length;

for (i = 2; i < allArgumentsLength; i += 1) {
	var current = allArguments[i];
	var currentAsNum = Number(current);
	sum += currentAsNum;
}

console.log(sum);