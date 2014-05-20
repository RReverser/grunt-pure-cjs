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

### Options

* **map**: `String|Function(input, output)|Boolean` &mdash; source map file; optional, doesn't generate source map by default; if `true` is provided, path default to `function (input, output) { return output + '.map' }`.
* **exports**: `String|Function(input, output)` &mdash; Exports top module with [UMD](https://github.com/umdjs/umd) with given global object name; optional, doesn't wrap into UMD by default.
* **transform**: `Array|Function(input)` &mdash; Array of or single function that returns transformation [through](https://github.com/dominictarr/through)-stream(s) to be used against input files before their usage; optional.
* *See [Pure CommonJS builder](https://github.com/RReverser/pure-cjs) for other options.*

If set, built module will be wrapped into anonymous function and exports from top (input) module will be placed into provided value.

### Usage Example

```js
grunt.initConfig({
  pure_cjs: {
    options: {
      exports: 'SuperLib'
    },
    files: {
      'built/superLib.js': 'src/topModule.js'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).