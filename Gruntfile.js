var grunt = require('grunt');

grunt.registerTask('default', 'default task description', function(){
  console.log('hello world');
});

grunt.registerTask('first-custom-task', 'First Custom Task', function(){
	console.log('Running the first custom task');
});