"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require('compression');
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importStar(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const api_1 = __importDefault(require("./api/"));
const mongodb_1 = require("./clients/mongodb");
const redirect_1 = require("./redirect");
const urls_1 = require("./middlewares/urls");
const cors_1 = require("./middlewares/cors");
const helpers_1 = require("./helpers");
dotenv_1.default.config();
(0, mongodb_1.mongoClient)();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(compression());
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: false }));
app.use(cors_1.corsMiddleware);
app.get('/:url', [urls_1.checkUrlCache, urls_1.checkValidUrl], redirect_1.redirect);
app.use(helpers_1.keyAuthMiddleware);
app.use('/api/v1', api_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map