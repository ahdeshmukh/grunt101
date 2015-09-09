//amit-build.txt

/*
Build task. minify, uglify, copy, sync, processhtml
*/

//ex: grunt amit-build

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> \n*/\n'
			},
			build: {
				files: [
					{
						expand: true,
						cwd: 'src/less',
						src: ['*.less'],
						dest: 'src/css/',
						ext: '.css'
					}
				]
			}
		},
		
		cssmin: {
			build: {
				files: {
					'dist/css/style.min.css': 'src/css/*.css'
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
					//'dist/js/all.min.js': ['src/**/*.js', '!src/**/filename.js'] to ignore any particular file
				}
			}
		},
		
		copy: {
			main: {
				files: [
				  {expand: true, src: ['index.html', 'copy-*/**', 'json/**'], dest: 'dist/'}
				]
			}
		},

		sync: {
			main: {
				files: [
				  {src: ['index.html', 'copy-*/**', 'json/**'], dest: 'dist/'}
				],
				verbose: true,
				failOnError: true,
				updateAndDelete: true,
				ignoreInDest: ['js/**', 'css/**']
			}
		},
		
		processhtml: {
			dist: {
	      options: {
	        process: true,
	        data: {
	          message: 'This is production distribution - Amit build'
	        }
	      },
	      files: {
	        'dist/index.html': ['index.html']
	      }
	    }
		},
		
		//notice the single quotes around json-minify. It is because grunt throws an error if there is a - in the task name
		'json-minify': {
			build: {
				files: 'dist/json/**/*.json'
			}
		}

	});
	
	grunt.registerTask('amit-build', 'Build task', ['less', 'cssmin', 'uglify', 'copy', 'sync', 'processhtml', 'json-minify']);
	
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
	grunt.loadNpmTasks('grunt-json-minify');

};