var require = meteorInstall({"client":{"main.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// client/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");     //
                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);            //
                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                       //
                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                              //
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
var _createClass2 = require("babel-runtime/helpers/createClass");                                 //
                                                                                                  //
var _createClass3 = _interopRequireDefault(_createClass2);                                        //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
var A = function () {                                                                             //
  function A() {                                                                                  //
    (0, _classCallCheck3.default)(this, A);                                                       //
  }                                                                                               //
                                                                                                  //
  (0, _createClass3.default)(A, [{                                                                //
    key: "foo",                                                                                   //
    get: function () {                                                                            //
      return 'A-foo';                                                                             // 3
    }                                                                                             // 4
  }, {                                                                                            //
    key: "bar",                                                                                   //
    get: function () {                                                                            //
      return 'A-bar|' + this.foo;                                                                 // 7
    }                                                                                             // 8
  }]);                                                                                            //
  return A;                                                                                       //
}();                                                                                              //
                                                                                                  //
var B = function (_A) {                                                                           //
  (0, _inherits3.default)(B, _A);                                                                 //
                                                                                                  //
  function B() {                                                                                  //
    (0, _classCallCheck3.default)(this, B);                                                       //
    return (0, _possibleConstructorReturn3.default)(this, _A.apply(this, arguments));             //
  }                                                                                               //
                                                                                                  //
  (0, _createClass3.default)(B, [{                                                                //
    key: "foo",                                                                                   //
    get: function () {                                                                            //
      return 'B-foo';                                                                             // 13
    }                                                                                             // 14
  }, {                                                                                            //
    key: "bar",                                                                                   //
    get: function () {                                                                            //
      var bBar = 'B-bar|' + this.foo; // `super.bar` should be 'A-bar|B-foo'.                     // 17
                                                                                                  //
      return _A.prototype.bar + " - " + bBar;                                                     // 20
    }                                                                                             // 21
  }]);                                                                                            //
  return B;                                                                                       //
}(A);                                                                                             //
                                                                                                  //
var x = new B();                                                                                  // 24
console.log(x.bar);                                                                               // 25
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./client/main.js");
