var reads = require('./Lesson6-1')

reads("/Users/joanna.pinto/Documents/NodeSchool/NodeSchoolLearning", "js", function (err, file) {
	if (err) {
		console.log("There was an error");
	} else {
		console.log(file);
	}
});