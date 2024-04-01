## Tutorial
- [ ] https://www.tutorialspoint.com/grunt/index.htm
- [x] https://gruntjs.com/getting-started

https://www.youtube.com/watch?v=K5z75xaIakA

## 1. Install grunt
> `npm install -g grunt-cli`
## 2. pacakge.json
> `npm init -y`
## 3. devDependencies:
Installing grunt & gruntplugins:
>    `npm i grunt --save-dev`<br>
>    `npm i grunt-contrib-jshint --save-dev`<br>
>    `npm i grunt-contrib-nodeunit --save-dev`<br>
>    `npm i grunt-contrib-uglify --save-dev`<br>

## 4. Create Grunt File
>  `Gruntfile.js`

## 5. [Grunt Config](https://gruntjs.com/api/grunt#grunt.initconfig):
   1. Config
   2. Creating Task
        register Task | register Multi Task | rename Task
   3. Loading Externally Defined Tasks
        load task | load npm tasks
   4. Warning and Fatal Errors
   5. Command line Options
   6. Miscellaneous

## 6. Create your code:
>     https://jshint.com/install/


## [Grunt Plugins](https://gruntjs.com/plugins)
- Plugins - `grunt-contrib-uglify`: `uglify` task is configured to minify a source file and generate a banner comment dynamically using that metadata. When grunt is run on the command line, the uglify task will be run by default.
```js
    module.exports = function (grunt) {
    // Initialized Config Data
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: `
                /**
                * Packages: <%= pkg.name %> 
                * Date:<%= grunt.template.today("yyyy-mm-dd") %> 
                * By Biswasindhu Mandal 
                */\n`
            },
            build: {
                src: ['src/*.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
```
```json
    // package.json
    "scripts": {
        "uglify": "grunt uglify"
    }
```
- Plugins - `grunt-cleanempty` : Clean Empty file in your source directory
```js
module.exports = function (grunt) {
    // Initialized Config Data
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cleanempty: {
            options: {
                force: true
            },
            src: ['src/**/*', 'public/*'],
        }
    });
    // Clean Empty File in Source Directory
    grunt.loadNpmTasks('grunt-cleanempty');

    // Default task(s).
    grunt.registerTask('default', ['cleanempty']);
}
```
- Plugins - `grunt-contrib-clean`: 
- Plugins - `grunt-es6-module-transpiler`
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
- Plugins - ``
  
-- ---------------------------------

- Perform Repetitive tasks
```
 ->  Prefixing CSS Rules
 ->  Compiling SASS files to CSS
 ->  Minify JS/CSS files
 ->  Concatenating Files
```

Steps:
```
  - Install Node.js
  - Install grunt-cli globally (npm i grunt-cli -g)
  - Create package.json files (npm init)
  - Install grunt locally (npm i grunt --save-dev)
  - Create a Gruntfile.js file 
        This is a module, create everything one by one
  - Install plugins (a.e: npm i grunt-contrib-uglify --save-dev)
```

Why GruntFile.js
```
    - Configures our tasks and tells plugins where to find certain files
    - Load plugins into the file (e.g uglify)
    - Register tasks which need to be run
```

Register Basic Grunt Tasks:
```
    // Basic Register Tasks
    grunt.registerTask('run', function() {
        console.log('I\'m running');
    });
    grunt.registerTask('sleep', function() {
        console.log('I\'m Sleeping');
    });
    grunt.registerTask('all', ['sleep', 'run']);


-----------Run in console-------------------
    grunt run;
    grunt sleep;
    grunt all;
```

Add plugins: `grunt-contrib-concat`
```
    
```