Package.describe({
  summary: "Dictionary data structure allowing non-string keys",
  version: '2.0.0-alpha300.5',
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('ejson');
  api.mainModule('id-map.js');
  api.export('IdMap');
});
