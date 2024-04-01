
module.exports = function (grunt) {
    // Initialization Grunt Configuration 
    grunt.initConfig({
        // pass in options to plugins, references to files etc.
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // task name
            js: {
                options: {
                    stripBanners: true,
                    banner: `/** \n` +    
                        `* Copyright 2023-2024 <%= pkg.author.name %> \n` +  
                        `* Licensed under MIT (<%= pkg.license_url %>) \n` +  
                        `* <%= pkg.buildInfo.dev.js %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>  \n` + 
                        `*/ \n` +
                        "'use strict';\n",
                },
                src: ['src/**/*.js'],
                dest: '<%= pkg.buildInfo.dev.repo %>/<%= pkg.buildInfo.dev.js %>'
            },
            // task name
            css: {
                options: {
                    stripBanners: true,
                    banner: `/** \n` +    
                        `* Copyright 2023-2024 <%= pkg.author.name %> \n` +  
                        `* Licensed under MIT (<%= pkg.license_url %>) \n` +  
                        `* <%= pkg.buildInfo.dev.css %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>  \n` + 
                        `*/ \n`,
                },
                src: ['src/**/*.css'],
                dest: '<%= pkg.buildInfo.dev.repo %>/<%= pkg.buildInfo.dev.css %>'
            }
        },
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
            prod: {
                options: {
                    banner: `/** \n` +    
                        `* Copyright 2023-2024 <%= pkg.author.name %> \n` +  
                        `* Licensed under MIT (<%= pkg.license_url %>) \n` +  
                        `* <%= pkg.buildInfo.prod.js %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>  \n` + 
                        `*/ \n` +
                        "'use strict';\n",
                },
                src: '<%= pkg.buildInfo.dev.repo %>/<%= pkg.buildInfo.dev.js %>',
                dest: '<%= pkg.buildInfo.prod.repo %>/<%= pkg.buildInfo.prod.js %>'
            }
        },
        clean: {
            options: {
                'force': true,
                'no-write': false
            },
            build: '<%= pkg.buildInfo.dev.repo %>',
            prod: '<%= pkg.buildInfo.prod.repo %>',
            all: '<%= pkg.buildInfo.prod.repo %>'
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

    // Load the plugins and register tasks

    // Basic Register Tasks
    grunt.registerTask('start', function(txt) {
        console.log(`============== Start executing task: ${txt} ===============`);
    });
    grunt.registerTask('end', function(txt) {
        console.log(`============= Complete executing task: ${txt} =============`);
    });
    grunt.registerTask('basic-task', ['start:start_task', 'end:end_task']);

    // grunt-contrib-concat: Add Plugins & Register task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('concat-js', ['start:js_bundle', 'concat:js', 'end:js_bundle']);
    grunt.registerTask('concat-css', ['start:css_bundle', 'concat:css', 'end:css_bundle']);
    grunt.registerTask('concat-all', ['concat-js', 'concat-css']);

    // Minify: Add plugins & register task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

    // Clean: Add plugins & register task
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('clean-build', ['start:clean_build_repo', 'clean:build', 'end:clean_build_repo']);

    

    // Grunt Actual Task
    grunt.registerTask('grunt-build', ['clean:build', 'concat:js', 'concat:css', 'uglify:prod']);


    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Default task(s).
    // grunt.registerTask('default', ['cleanAll']);
    // Show Logs
    grunt.registerMultiTask('log', 'Log stuff.', function (arr) {
        grunt.log.writeln('Grunt Logs: ', this.target + ': ' + this.data, arr);
    });
}