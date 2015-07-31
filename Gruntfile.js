//watch.txt

/*
watches for changes to js and less files. if there are changes, it creates updated minified version of css and js files
*/

//ex: grunt watch

module.exports = function(grunt) {

	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),

		// all of our configuration will go here
		
		less: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/style.css': 'src/**/*.less'
				}
			}
		},
		
		cssmin: {
			build: {
				files: {
					'dist/css/style.min.css': 'dist/css/style.css'
				}
			}
		},
		
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> \n*/\n'
			},
			build: {
				files: {
					'dist/js/all.min.js': 'src/**/*.js'
				}
			}
		},
		
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
			},
			build: ['src/**/*.js']
		},
		
		watch: {
			//eatch changes to /js files. run jshint and uglify
			scripts: { 
		    files: 'src/**/*.js', 
		    tasks: ['jshint', 'uglify'] 
		  },
		  
		  //watch changes to .less files. run less and cssmin tasks
		  styles: { 
		    files: ['src/**/*.less'], 
		    tasks: ['less', 'cssmin']
		  },
		}

	});
	
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

};