var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, function (err, files) {
		if (err) {
          callback(err)		
		}
		for (i = 0; i < files.length; i += 1) {
			var currentFile = files[i];
			if (path.extname(currentFile) === "." + extension) {
				callback(null, currentFile)
			}
		}
	});
}
