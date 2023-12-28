"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomStr = void 0;
var bases = require('bases');
const crypto_1 = require("crypto");
function randomStr(length) {
    var maxNum = Math.pow(62, length);
    var numBytes = Math.ceil(Math.log(maxNum) / Math.log(256));
    if (numBytes === Infinity) {
        throw new Error('Length too large; caused overflow: ' + length);
    }
    do {
        var bytes = (0, crypto_1.randomBytes)(numBytes);
        var num = 0;
        for (var i = 0; i < bytes.length; i++) {
            num += Math.pow(256, i) * bytes[i];
        }
    } while (num >= maxNum);
    return bases.toBase62(num);
}
exports.randomStr = randomStr;
//# sourceMappingURL=base62.js.map