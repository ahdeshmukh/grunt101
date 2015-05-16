var grunt = require('grunt');

//ex: grunt hello-multiple-names:Amit:Jaya
grunt.registerTask('hello-multiple-names', 'multiple args example. invoke task as hello-multiple-names:arg1:arg2', 

function(name1, name2){
	if(!name1 || !name1.length || !name2 || !name2.length) {
		grunt.warn('Both the names are required');
	}
	
	console.log('Hello ' + name1 + ' and ' + name2);
});