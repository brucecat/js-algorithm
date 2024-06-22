"use strict";
exports.__esModule = true;
exports.HashMap = void 0;
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.map = {};
    }
    HashMap.prototype.put = function (key, value) {
        this.map[key] = value;
    };
    HashMap.prototype.get = function (key) {
        return this.map[key];
    };
    HashMap.prototype.remove = function (key) {
        delete this.map[key];
    };
    HashMap.prototype.getAllKeys = function () {
        return Object.keys(this.map);
    };
    HashMap.prototype.removeAll = function () {
        this.map = {};
    };
    return HashMap;
}());
exports.HashMap = HashMap;
