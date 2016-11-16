module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
        shell: {
            startDev: 'nodemon src/server',
            startProd: 'node dist/server',
        },
        clean: {
            preDist: ["dist/*"],
            postDist: [".tmp"]
        },
        copy: {
            dev: {
                expand: true,
                src: 'node_modules/**',
                dest: 'src/client'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: 'client/*.html',
                    dest: 'dist/',
                },{
                    expand: true,
                    cwd: 'src',
                    src: 'client/js/config.js',
                    dest: 'dist/',
                },{
                  expand: true,
                  cwd: 'src',
                  src: 'client/app/**/*',
                  dest: 'dist/',
                },{
                  expand: true,
                  cwd: 'src',
                  src: 'server/**/*',
                  dest: 'dist/',
                }],
            },
        },
        useminPrepare: {
            options: {
              dest: 'dist/client'
            },
            html: 'src/client/index.html'
        },
        usemin: {
            html: 'dist/client/index.html'
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./src/client/",
                    mainConfigFile: "./src/client/js/config.js",
                    include: ["js/main.js"],
                    out: "./dist/client/js/main.js"
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

    grunt.registerTask('serveDev', [
        'copy:dev',
        'shell:startDev',
    ]);

    grunt.registerTask('serveProd', [
        'dist',
        'shell:startProd',
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
