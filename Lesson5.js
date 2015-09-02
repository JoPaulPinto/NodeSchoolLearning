var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(directory, function (err, files) {
	for (i = 0; i < files.length; i += 1) {
		var currentFile = files[i];
		if (path.extname(currentFile) === extension) {
			console.log(currentFile);
		}
	}
});