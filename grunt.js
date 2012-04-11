/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'app.js','test/**/*.js', 'views/**/*.js','routes/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    mocha: {
      files: ['test/**/*.js']
    },
    growl:true,
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint mocha'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        require:true,
        describe:true,
        it:true,
        exports:true,
        module:false,
        __dirname:true,
        console:true
      }
    }
  });

  grunt.registerTask('default', 'lint test');
  grunt.loadTasks('tasks');

};
