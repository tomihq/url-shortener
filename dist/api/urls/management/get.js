"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutShortedUrl = void 0;
const aboutShortedUrl = async (req, res) => {
    const foundUrl = res.locals.foundUrl;
    return res.json({ success: true, url: foundUrl });
};
exports.aboutShortedUrl = aboutShortedUrl;
//# sourceMappingURL=get.js.map