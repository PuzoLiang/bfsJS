"use strict";

var _hash = _interopRequireDefault(require("./hash"));

var _figlet = _interopRequireDefault(require("figlet"));

var _clear = _interopRequireDefault(require("clear"));

var _clui = _interopRequireDefault(require("clui"));

var _Queue = _interopRequireDefault(require("./Queue"));

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
    console.log("\u6B63\u5728\u521B\u5EFA\u6709\u5411\u56FE.");
    graph.set("you", ["alice", "bob", "ciaire"]);
    graph.set("bob", ["anuj", "peggy"]);
    graph.set("alice", ["peggy"]);
    graph.set("claire", ["thom", "jonny"]);
    graph.set("anuj", []);
    graph.set("peggy", []);
    graph.set("thom", []);
    graph.set("jonny", []);
    console.log("\u6709\u5411\u56FE\u521B\u5EFA\u5B8C\u6BD5");
    console.log("\u8BBE\u7F6E\u961F\u5217");
    var search_queue = new _Queue.default();
    search_queue.enqueue(graph.get("you"));

    while (search_queue.isEmpty()) {
      var person = search_queue.dequeue();

      if (is_person(person)) {
        console.log("\u627E\u5230\u6B64\u4EBA\u4E86");
        return true;
      } else {
        search_queue.enquene(graph.get("person"));
      }

      return false;
    }

    function is_person(person) {
      if (person === "jonny") {
        return true;
      } else {
        return false;
      }
    }
  });
}