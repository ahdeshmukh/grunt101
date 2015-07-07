/*
one custom task invokes multiple other custom tasks. one of those multiple task accepts argument
*/

var grunt = require('grunt');

//ex: grunt custom-invokes-multiple
grunt.registerTask('custom-invokes-multiple', 'Custom task which invokes multiple other tasks', 
					['multiple-task1', 'multiple-task2', 'multiple-task3:Amit']
				);

grunt.registerTask('multiple-task1', 'Multiple task 1', function(){
	console.log('Running multipe task 1');
});

grunt.registerTask('multiple-task2', 'Multiple task 2', function(){
	console.log('Running multipe task 2');
});

grunt.registerTask('multiple-task3', 'Multiple task 3', function(name){
	if(!name || !name.length) {
		grunt.warn('You need to provide a name');
	}
	console.log('Hello ' + name);
});