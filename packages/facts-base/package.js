Package.describe({
  summary: "Publish internal app statistics",
  version: '2.0.0-alpha300.5',
});

Package.onUse(function (api) {
  api.use('ecmascript', ['client', 'server']);

  // Detect whether autopublish is used.
  api.use('autopublish', 'server', {weak: true});

  // Unordered dependency on livedata, since livedata has a (weak) dependency on
  // us.
  api.use('ddp', 'server', {unordered: false});

  api.mainModule('facts_base_server.js', 'server');
  api.mainModule('facts_base_common.js', 'client');

  api.export('Facts');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'ecmascript', 'facts-base']);
  api.addFiles(['facts_base.tests.js'], 'server');
});
