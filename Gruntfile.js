/*
one custom task invokes multiple other custom tasks. one of those multiple task accepts argument. in this case the argument for multiple-task3 is passed dynamically from the parent custom-invokes-multiple task
*/

var grunt = require('grunt');

//ex: grunt custom-invokes-multiple or grunt custom-invokes-multiple:Amit
grunt.registerTask('custom-invokes-multiple', 'Custom task which invokes multiple other tasks', function(name) {
						grunt.task.run('multiple-task1');
						grunt.task.run('multiple-task2');
						if(name) {
							grunt.task.run('multiple-task3:' + name);
						}
					}
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