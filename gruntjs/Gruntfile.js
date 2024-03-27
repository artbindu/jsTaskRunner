
module.exports = function (grunt) {
    // Initialized Config Data
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
              sourceMap: true,
              presets: ['@babel/preset-env']
            },
            build: {
              files: {
                'build/build.js': 'src/**/*.js'
              }
            }
          },
        uglify: {
            options: {
                banner: `
                /**
                * Packages: <%= pkg.name %> 
                * Date:<%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> 
                * By Biswasindhu Mandal 
                */\n`
            },
            build: {
                src: ['src/*.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        clean: {
            options: {
                'force': true,
                'no-write': false
            },
            build: ['build']
        },
        cleanempty: {
            options: {
                force: true
            },
            src: ['src/**/*', 'public/*'],
        },
        jshint: {
            files: ['src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }
    });

    // Load the plugin that provides the "uglify" task.
    // Minify Source File
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

    // Clean files and folders
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean']);

    
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Default task(s).
    // grunt.registerTask('default', ['cleanAll']);
    // Show Logs
    grunt.registerMultiTask('log', 'Log stuff.', function (arr) {
        grunt.log.writeln('Grunt Logs: ', this.target + ': ' + this.data, arr);
    });
}