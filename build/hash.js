"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LinkedList = _interopRequireDefault(require("./LinkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
var defaultHashTableSize = 32;

var HashTable =
/*#__PURE__*/
function () {
  /**
   * @param {number} hashTableSize
   */
  function HashTable() {
    var hashTableSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultHashTableSize;

    _classCallCheck(this, HashTable);

    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(function () {
      return new _LinkedList.default();
    }); // Just to keep track of all actual keys in a fast way.

    this.keys = {};
  }
  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */


  _createClass(HashTable, [{
    key: "hash",
    value: function hash(key) {
      // For simplicity reasons we will just use character codes sum of all characters of the key
      // to calculate the hash.
      //
      // But you may also use more sophisticated approaches like polynomial string hash to reduce the
      // number of collisions:
      //
      // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
      //
      // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
      // PRIME is just any prime number like 31.
      var hash = Array.from(key).reduce(function (hashAccumulator, keySymbol) {
        return hashAccumulator + keySymbol.charCodeAt(0);
      }, 0); // Reduce hash number so it would fit hash table size.

      return hash % this.buckets.length;
    }
    /**
     * @param {string} key
     * @param {*} value
     */

  }, {
    key: "set",
    value: function set(key, value) {
      var keyHash = this.hash(key);
      this.keys[key] = keyHash;
      var bucketLinkedList = this.buckets[keyHash];
      var node = bucketLinkedList.find({
        callback: function callback(nodeValue) {
          return nodeValue.key === key;
        }
      });

      if (!node) {
        // Insert new node.
        bucketLinkedList.append({
          key: key,
          value: value
        });
      } else {
        // Update value of existing node.
        node.value.value = value;
      }
    }
    /**
     * @param {string} key
     * @return {*}
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      var keyHash = this.hash(key);
      delete this.keys[key];
      var bucketLinkedList = this.buckets[keyHash];
      var node = bucketLinkedList.find({
        callback: function callback(nodeValue) {
          return nodeValue.key === key;
        }
      });

      if (node) {
        return bucketLinkedList.delete(node.value);
      }

      return null;
    }
    /**
     * @param {string} key
     * @return {*}
     */

  }, {
    key: "get",
    value: function get(key) {
      var bucketLinkedList = this.buckets[this.hash(key)];
      var node = bucketLinkedList.find({
        callback: function callback(nodeValue) {
          return nodeValue.key === key;
        }
      });
      return node ? node.value.value : undefined;
    }
    /**
     * @param {string} key
     * @return {boolean}
     */

  }, {
    key: "has",
    value: function has(key) {
      return Object.hasOwnProperty.call(this.keys, key);
    }
    /**
     * @return {string[]}
     */

  }, {
    key: "getKeys",
    value: function getKeys() {
      return Object.keys(this.keys);
    }
  }]);

  return HashTable;
}();

exports.default = HashTable;