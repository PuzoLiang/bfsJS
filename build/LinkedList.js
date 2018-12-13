"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LinkedListNode = _interopRequireDefault(require("./LinkedListNode"));

var _Comparator = _interopRequireDefault(require("./Comparator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkedList =
/*#__PURE__*/
function () {
  /**
   * @param {Function} [comparatorFunction]
   */
  function LinkedList(comparatorFunction) {
    _classCallCheck(this, LinkedList);

    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */

    this.tail = null;
    this.compare = new _Comparator.default(comparatorFunction);
  }
  /**
   * @param {*} value
   * @return {LinkedList}
   */


  _createClass(LinkedList, [{
    key: "prepend",
    value: function prepend(value) {
      // Make new node to be a head.
      var newNode = new _LinkedListNode.default(value, this.head);
      this.head = newNode; // If there is no tail yet let's make new node a tail.

      if (!this.tail) {
        this.tail = newNode;
      }

      return this;
    }
    /**
     * @param {*} value
     * @return {LinkedList}
     */

  }, {
    key: "append",
    value: function append(value) {
      var newNode = new _LinkedListNode.default(value); // If there is no head yet let's make new node a head.

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      } // Attach new node to the end of linked list.


      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
    /**
     * @param {*} value
     * @return {LinkedListNode}
     */

  }, {
    key: "delete",
    value: function _delete(value) {
      if (!this.head) {
        return null;
      }

      var deletedNode = null; // If the head must be deleted then make next node that is differ
      // from the head to be a new head.

      while (this.head && this.compare.equal(this.head.value, value)) {
        deletedNode = this.head;
        this.head = this.head.next;
      }

      var currentNode = this.head;

      if (currentNode !== null) {
        // If next node must be deleted then make next node to be a next next one.
        while (currentNode.next) {
          if (this.compare.equal(currentNode.next.value, value)) {
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
          } else {
            currentNode = currentNode.next;
          }
        }
      } // Check if tail must be deleted.


      if (this.compare.equal(this.tail.value, value)) {
        this.tail = currentNode;
      }

      return deletedNode;
    }
    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */

  }, {
    key: "find",
    value: function find(_ref) {
      var _ref$value = _ref.value,
          value = _ref$value === void 0 ? undefined : _ref$value,
          _ref$callback = _ref.callback,
          callback = _ref$callback === void 0 ? undefined : _ref$callback;

      if (!this.head) {
        return null;
      }

      var currentNode = this.head;

      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.value)) {
          return currentNode;
        } // If value is specified then try to compare by value..


        if (value !== undefined && this.compare.equal(currentNode.value, value)) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }
    /**
     * @return {LinkedListNode}
     */

  }, {
    key: "deleteTail",
    value: function deleteTail() {
      var deletedTail = this.tail;

      if (this.head === this.tail) {
        // There is only one node in linked list.
        this.head = null;
        this.tail = null;
        return deletedTail;
      } // If there are many nodes in linked list...
      // Rewind to the last node and delete "next" link for the node before the last one.


      var currentNode = this.head;

      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;
      return deletedTail;
    }
    /**
     * @return {LinkedListNode}
     */

  }, {
    key: "deleteHead",
    value: function deleteHead() {
      if (!this.head) {
        return null;
      }

      var deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }

      return deletedHead;
    }
    /**
     * @param {*[]} values - Array of values that need to be converted to linked list.
     * @return {LinkedList}
     */

  }, {
    key: "fromArray",
    value: function fromArray(values) {
      var _this = this;

      values.forEach(function (value) {
        return _this.append(value);
      });
      return this;
    }
    /**
     * @return {LinkedListNode[]}
     */

  }, {
    key: "toArray",
    value: function toArray() {
      var nodes = [];
      var currentNode = this.head;

      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    }
    /**
     * @param {function} [callback]
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString(callback) {
      return this.toArray().map(function (node) {
        return node.toString(callback);
      }).toString();
    }
    /**
     * Reverse a linked list.
     * @returns {LinkedList}
     */

  }, {
    key: "reverse",
    value: function reverse() {
      var currNode = this.head;
      var prevNode = null;
      var nextNode = null;

      while (currNode) {
        // Store next node.
        nextNode = currNode.next; // Change next node of the current node so it would link to previous node.

        currNode.next = prevNode; // Move prevNode and currNode nodes one step forward.

        prevNode = currNode;
        currNode = nextNode;
      } // Reset head and tail.


      this.tail = this.head;
      this.head = prevNode;
      return this;
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;