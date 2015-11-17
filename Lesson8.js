var http = require('http');

http.get(process.argv[2], function (response) {
	var collector = "";
	
	response.setEncoding("utf8");
	response.on('data', function(data) {		
		collector += data;
	});
	response.on("end", function (end) {
		console.log(collector.length);
		console.log(collector);
	});
});