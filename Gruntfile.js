//amit-build.txt

/*
Build task. minify, uglify, copy, sync
*/

//ex: grunt amit-build

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		processhtml: {
			dist: {
	      options: {
	        process: true,
	        data: {
	          message: 'This is production distribution'
	        }
	      },
	      files: {
	        'dist/index.html': ['index.html']
	      }
	    }
		}

	});
	
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-processhtml');

};