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