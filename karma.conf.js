module.exports = function (config) {
	config.set({
		autoWatch: true,
		basePath: '.',
		browsers: ['Chrome'],
		colors: true,
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		port: 9876,
		singleRun: false,

		coverageReporter: {
			reporters: [
				{ file: 'coverage-final.json', type: 'json' }
			]
		},

		files: [
			// Load Angular 2 dependencies and the SystemJS shim
			{ pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },
			{ pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
			{ pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true },
			{ pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true },
			{ pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },
			{ pattern: 'karma-test-shim.js', included: true, watched: true },

			// The application and test files
            { pattern: 'dist/app/**/*.js', included: false, watched: false },
			{ pattern: 'dist/test/unit/app/**/*.js', included: false, watched: false },
			
			// Support for debugging seessions
            { pattern: 'source/app/**/*.ts', included: false, watched: false },
            { pattern: 'dist/test/unit/app/**/*.js.map', included: false, watched: false }
		],

		plugins: [
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-jasmine'
		],

		preprocessors: {
			'source/app/**/*.js': ['coverage']
		},

		proxies: {
			'/angular2/': '/base/node_modules/angular2/',
			'/node_modules/': '/base/node_modules/',
			'/source/app/': '/base/source/app/'
		},

		reporters: [
			'coverage',
			'progress'
		]
	})
}