module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        clean: {
            preDist: ["dist/*"],
            postDist: [".tmp"]
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: '*.html',
                    dest: 'dist/',
                }, {
                    expand: true,
                    src: 'js/config.js',
                    dest: 'dist/',
                }],
            },
        },
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: 'dist/index.html'
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./",
                    mainConfigFile: "js/config.js",
                    include: ["js/main.js"],
                    out: "dist/js/main.js"
                }
            }
        }
    });

    grunt.registerTask('dist', [
        'clean:preDist',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'copy:dist',
        'usemin',
        'requirejs:compile',
        'clean:postDist',
    ]);

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
