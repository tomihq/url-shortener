"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schemas = {
    createShortedUrl: joi_1.default.object({
        url: joi_1.default.string().required()
    }),
    aboutShortedUrl: joi_1.default.object({
        url: joi_1.default.string().required()
    })
};
//# sourceMappingURL=schemas.js.map