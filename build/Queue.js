"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LinkedList = _interopRequireDefault(require("../linked-list/LinkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.linkedList = new _LinkedList.default();
  }
  /**
   * @return {boolean}
   */


  _createClass(Queue, [{
    key: "isEmpty",
    value: function isEmpty() {
      return !this.linkedList.head;
    }
    /**
     * Read the element at the front of the queue without removing it.
     * @return {*}
     */

  }, {
    key: "peek",
    value: function peek() {
      if (!this.linkedList.head) {
        return null;
      }

      return this.linkedList.head.value;
    }
    /**
     * Add a new element to the end of the queue (the tail of the linked list).
     * This element will be processed after all elements ahead of it.
     * @param {*} value
     */

  }, {
    key: "enqueue",
    value: function enqueue(value) {
      this.linkedList.append(value);
    }
    /**
     * Remove the element at the front of the queue (the head of the linked list).
     * If the queue is empty, return null.
     * @return {*}
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      var removedHead = this.linkedList.deleteHead();
      return removedHead ? removedHead.value : null;
    }
    /**
     * @param [callback]
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString(callback) {
      // Return string representation of the queue's linked list.
      return this.linkedList.toString(callback);
    }
  }]);

  return Queue;
}();

exports.default = Queue;