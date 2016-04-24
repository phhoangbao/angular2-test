// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;


jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function () { };


System.config({
	packages: {
		'base/dist': {
			defaultExtension: false,
			format: 'cjs',
			map: Object.keys(window.__karma__.files).
				filter(onlyAppFiles).
				reduce(function createPathRecords(pathsMapping, appPath) {

				var moduleName = './' + resolveKeyPathForMapping('base/dist/', appPath);
				moduleName = moduleName.replace(/\.js$/, '');
				pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
				return pathsMapping;

				}, {})

		}
    }
});

System.import('angular2/src/platform/browser/browser_adapter').then(function (browser_adapter) {
	browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function () {
	return Promise.all(
		Object.keys(window.__karma__.files) // All files served by Karma.
			.filter(onlySpecFiles)
			.map(function (moduleName) {
				// loads all spec files via their global module names (e.g. 'base/src/app/hero.service.spec')
				return System.import(moduleName);
			}));
})
	.then(function () {
		__karma__.start();
	}, function (error) {
		__karma__.error(error.stack || error);
	});


function filePath2moduleName(filePath) {
	return filePath.
		replace(/^\//, '').              // remove / prefix
		replace(/\.\w+$/, '');           // remove suffix
}


function onlyAppFiles(filePath) {
	return /\/base\/dist\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
	return /\.spec\.js$/.test(path);
}

function resolveKeyPathForMapping(basePathWhereToStart, appPath) {
	var location = appPath.indexOf(basePathWhereToStart);
	if (location > -1) {
		return appPath.substring(basePathWhereToStart.length + 1);
	} else {
		return appPath;
	}
}