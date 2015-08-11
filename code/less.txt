//less.txt

/*
grunt less:correspondingCss css file from corresponding less file. Example css/red.css will be created from less/red.less
grunt less:singleCss creates single css file from all the .less files 
*/


//ex: grunt less or grunt less:correspondingCss or grunt less:singleCss

module.exports = function(grunt) {

	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),

		// all of our configuration will go here
		
		less: {
			correspondingCss: {
				files: [
					{
						expand: true,
						cwd: 'src/less',
						src: ['*.less'],
						dest: 'src/css/',
						ext: '.css'
					}
				]
			},
			singleCss: {
				files: {
					'src/css/all.css': 'src/**/*.less'
					//'dist/css/style.css': ['src/**/*.less', '!src/**/filename.less'] // to ignore any particular file
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

};