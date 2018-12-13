"use strict";

var _hash = _interopRequireDefault(require("./hash"));

var _figlet = _interopRequireDefault(require("figlet"));

var _clear = _interopRequireDefault(require("clear"));

var _clui = _interopRequireDefault(require("clui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = _clui.default.Spinner;
var countdown = new Spinner('正在初始化图...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
countdown.start();
var number = 5;
setInterval(function () {
  number--;
  countdown.message('剩余 ' + number + ' 秒...  ');

  if (number === 0) {
    countdown.stop();
    run();
  }
}, 1000);

function run() {
  (0, _clear.default)();
  (0, _figlet.default)('Amazing BFS', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }

    console.log(data);
    console.log("\n\u6B22\u8FCE\u6765\u5230BFS\u7B97\u6CD5\u4E16\u754C,\u5373\u5C06\u5C55\u793A\u4E00\u4E2A\u7B80\u5355\u7684Demo\n");
    var graph = new _hash.default();
  });
}