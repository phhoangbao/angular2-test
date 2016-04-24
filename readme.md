To run test:
```
npm install
gulp build

npm test
```

Change [format: 'cjs'] to [format: 'register'] (under System.config portion) in file karma-test-shim.js and rerun build and test to simulate error:

>Missing error handler on `socket`.
TypeError: (msg || "").replace is not a function
  at /xxx/node_modules/karma/lib/reporter.js:45:23
  at [object Object].onBrowserError (/xxx/node_modules/karma/lib/reporters/base.js:58:60)