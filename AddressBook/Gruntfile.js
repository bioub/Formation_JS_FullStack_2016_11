module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        copy: {
            dist: {
                expand: true,
                src: '*.html',
                dest: 'dist/',
            },
        },
        useminPrepare: {
            html: 'index.html'
        }
    });

    /*
    grunt.initConfig({
        hello: {
            build: {},
            backup: {},
            buildContinuous: {}
        }
    });

    grunt.registerMultiTask('hello', function() {
        console.log('Hello Grunt');
    });
    */
};
