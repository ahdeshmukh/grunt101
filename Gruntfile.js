//copy.txt

/*
copies index.html file to dist 
*/

//ex: grunt copy

module.exports = function(grunt) {

	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),

		// all of our configuration will go here
		
		
		/*
		 * copies index.html and all folders that start with "copy-", along with their subdirectories into dist folder
		 * copy does not delete files from copy-* folders inside dist, even if they are deleted from the original folder 
		 * */
		
		
		//expand: true
		/* if a folder already exists in the dest, and if we issue grunt copy command, grunt copies new files that may have been added to 
			to the original folder to corresponding folder in the dest. if we set expand: false, and add a new file to src folder and issue
			grunt copy, it will not copy the new file into the corresponding folder in dest
		*/
		
		copy: {
			main: {
				files: [
				  {expand: true, src: ['index.html', 'copy-*/**'], dest: 'dist/'}
				]
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

};