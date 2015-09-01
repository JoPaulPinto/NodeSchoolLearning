var fs = require('fs');

fs.readFile(process.argv[2], function (err, fileContents) {
	var lineCount = fileContents.toString().split("\n").length - 1;
	console.log(lineCount);
});