Package.describe({
  version: '1.0.0'
});

Package.onUse((api) => {
  api.use('ecmascript');
  api.mainModule('main.js');
});
