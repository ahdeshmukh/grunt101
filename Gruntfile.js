var grunt = require('grunt');

grunt.registerTask('default', 'default task description', function(){
  console.log('hello world');
});

grunt.registerTask('first-custom-task', 'First Custom Task', function(){
	console.log('Running the first custom task');
});

grunt.registerTask('hello-name', 'say hello to name passed through command line', function(name){
	if(!name || !name.length) {
		grunt.warn('You need to provide a name');
	}
	
	console.log('Hello ' + name);
});

grunt.registerTask('hello-multiple-names', 'multiple args example. invoke task as hello-multiple-names:arg1:arg2', function(name1, name2){
	if(!name1 || !name1.length || !name2 || !name2.length) {
		grunt.warn('Both the names are required');
	}
	
	console.log('Hello ' + name1 + ' and ' + name2);
});