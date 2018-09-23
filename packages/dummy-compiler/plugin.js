Plugin.registerCompiler({
  extensions: ["dummy"]
}, function () {
  return new DummyCompiler();
});

function DummyCompiler() {}

DummyCompiler.prototype.processFilesForTarget = function (inputFiles) {
  var self = this;

  inputFiles.forEach(function (inputFile) {
    self.compileOneFile(inputFile);
  });
};

DummyCompiler.prototype.compileOneFile = function (inputFile) {
  var path = inputFile.getPathInPackage();

  inputFile.addJavaScript({
    path: path,
    data: '"dummy 1"'
  });

  inputFile.addJavaScript({
    path: path + ".secondModule",
    data: '"dummy 2"'
  });
};
