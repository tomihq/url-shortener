"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urls_1 = __importDefault(require("./urls"));
const router = (0, express_1.Router)();
router.use('/urls', urls_1.default);
router.use((err, req, res, next) => {
    var _a;
    if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.isJoi) {
        res.status(400).json({
            type: err.type,
            message: err.error.toString(),
        });
    }
    else {
        // pass on to another error handler
        next(err);
    }
});
router.get('/', (req, res) => {
    res.json({ message: 'Welcome' });
});
exports.default = router;
//# sourceMappingURL=index.js.map