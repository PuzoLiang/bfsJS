"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkedListNode =
/*#__PURE__*/
function () {
  function LinkedListNode(value) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, LinkedListNode);

    this.value = value;
    this.next = next;
  }

  _createClass(LinkedListNode, [{
    key: "toString",
    value: function toString(callback) {
      return callback ? callback(this.value) : "".concat(this.value);
    }
  }]);

  return LinkedListNode;
}();

exports.default = LinkedListNode;