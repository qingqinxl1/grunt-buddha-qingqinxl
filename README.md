# grunt-buddha-qingqinxl

> test gruntplugin

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-qingqinxl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-qingqinxl');
```

## The "buddha_qingqinxl" task

### Overview
In your project's Gruntfile, add a section named `buddha_qingqinxl` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_qingqinxl: {
    options: {
        who: 'buddha_qingqinxl',
        commentSymbol: '//'
      },
    dist: ['example/*.js']
  }
})
```

### Options

#### options.who
Type: `String`
Default: `buddha_qingqinxl`
who: `String`
添加神兽保佑还是佛祖保佑的js注释，默认为佛祖保佑，神兽保佑选项值为：alpaca

A string value that is used to do something with whatever.

#### options.commentSymbol
Type: `String`
Default value: `//`
添加神兽保佑或者佛祖保佑注释以js注释//开头

A string value that is used to do something else with whatever else.

### dist
需要添加神兽保佑或者佛祖保佑的js文件路径


```
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-11-19 v0.0.1
2015-11-25 v0.0.2

## License
Copyright (c) 2015 qingqinxl. Licensed under the MIT license.
