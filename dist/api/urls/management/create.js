"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShortedUrl = void 0;
const base62_1 = require("../../../helpers/base62");
const Url_1 = __importDefault(require("../../../models/Url"));
const config_1 = require("../../../config");
const createShortedUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl = (0, base62_1.randomStr)(7);
    const data = {
        long: url,
        short: shortUrl,
        userId: "658d8eb200529225568e79ad"
    };
    await Url_1.default.create(data);
    return res.json({ success: true, shortUrl: `${config_1.API_DOMAIN}/${shortUrl}` });
};
exports.createShortedUrl = createShortedUrl;
//# sourceMappingURL=create.js.map