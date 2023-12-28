"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShortedUrl = void 0;
const base62_1 = require("../../../helpers/base62");
const Url_1 = __importDefault(require("../../../models/Url"));
const User_1 = __importDefault(require("../../../models/User"));
const config_1 = require("../../../config");
const createShortedUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl = (0, base62_1.randomStr)(7);
    //TODO: remove this later and get user authenticated by JWT.
    const user = await User_1.default.findOne({ email: "hernandeztomas584@gmail.com" });
    const data = {
        long: url,
        short: shortUrl,
        userId: user //for now, hardcoded user.
    };
    await Url_1.default.create(data);
    return res.json({ success: true, shortUrl: `${config_1.API_DOMAIN}/${shortUrl}` });
};
exports.createShortedUrl = createShortedUrl;
//# sourceMappingURL=create.js.map