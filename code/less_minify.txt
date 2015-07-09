// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function

//ex: grunt less-minify
module.exports = function(grunt) {

	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),

		// all of our configuration will go here
		
		less: {
			build: {
				files: {
					'dist/css/style.css': 'src/**/*.less'
				}
			}
		},
		
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/style.min.css': 'dist/css/style.css'
				}
			}
		}

	});
	
	grunt.registerTask('less-minify', 'Converts less files into single css file and minify that file later', 
					['less', 'cssmin']
				);

	
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

};