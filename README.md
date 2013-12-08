# grunt-pure-cjs

> Grunt plugin for [Pure CommonJS builder](https://github.com/RReverser/pure-cjs)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pure-cjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pure-cjs');
```

## The "pure_cjs" task

### Overview
In your project's Gruntfile, add a section named `pure_cjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pure_cjs: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.exports
Type: `String` | `Function(inputFilename, outputFilename)`
**Optional**

If set, built module will be wrapped into anonymous function and exports from top (input) module will be placed into provided value.

### Usage Example

```js
grunt.initConfig({
  pure_cjs: {
    options: {
      exports: 'window.SuperLib'
    },
    files: {
      'built/superLib.js': 'src/topModule.js'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).