"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

array = [1, 2, 3, 4, 5];
console.log("------------------Example 1------------------");

var result = _toConsumableArray(array);

console.log(result);
console.log("---------------End----Example 1---------------");
console.log("------------------Example 2------------------");
var fname = "Mr.";
var lname = "RObot";
console.log("Hola! ".concat(fname, ", ").concat(lname));
console.log("---------------End----Example 2---------------");
b = array.indexOf(5);
console.log("IndexOf 5 in given array is", b);
var str = "Hello world!";
var res = str.slice(0, 5);
console.log(res);
console.log("Map Example");
var newArray = array.map(function (item) {
  return item + 1;
});
console.log(newArray);
console.log("Reduce Example");
var reduceArray = array.reduce(function (item, value) {
  return item + value;
}, 0);
console.log(reduceArray);
console.log("Filter Example");
var numbers = [23, 43, 34, 54, 65, 76, 87, 8];
var findOdd = numbers.filter(function (numbers) {
  if (numbers % 2 != 0) return numbers;
});
console.log(findOdd);