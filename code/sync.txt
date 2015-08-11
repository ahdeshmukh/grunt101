//sync.txt

/*
https://www.npmjs.com/package/grunt-sync
after copying files and folders to dest, run sync to remove deleted files
*/

//ex: grunt sync

module.exports = function(grunt) {

	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),

		sync: {
			main: {
				files: [
				  {src: ['index.html', 'copy-*/**'], dest: 'dist/'}
				],
				verbose: true,
				//pretend: true, //dry run, don't do actual operations. default false
				failOnError: true, //fail if copying is not possible. default false
				updateAndDelete: true, //remove files from folder that are not found in src,
				ignoreInDest: ['js/**', 'css/**'], // do not remove files from js and css folders
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

};