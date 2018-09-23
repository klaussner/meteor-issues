Package.describe({
  name: "dummy-compiler",
  version: "1.0.0"
});

Package.registerBuildPlugin({
  name: "dummy-compiler",
  sources: ["plugin.js"]
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
});
