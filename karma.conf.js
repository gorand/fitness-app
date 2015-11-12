module.exports = function(config) {
  config.set({
    basePath: './',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'builds/devv/app/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: [
      'Chrome'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  })  
}
