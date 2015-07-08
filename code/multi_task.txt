/*multitask example. multitask is one which is further broken down into smaller tasks. all the small tasks are a part of the parent task*/

var grunt = require('grunt');

//ex: grunt multiTask will run task1, task2 and task3. while grunt multiTask:task2 will run only task2
grunt.initConfig({
    multiTask: {
		task1: ['index.html', 'src/styles.css', 2],
		task2: 'hello task2',
		task3: 'hello task3'
    }
  });

grunt.registerMultiTask('multiTask', 'print targets', function() {
	grunt.log.writeln(this.target + ': ' + this.data);
});