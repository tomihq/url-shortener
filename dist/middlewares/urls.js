"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidUrl = exports.checkUrlCache = void 0;
const NodeCache_1 = require("../classes/NodeCache");
const urls_1 = require("../queries/urls");
const checkUrlCache = async (req, res, next) => {
    const { url } = req.params;
    if (!url)
        return res.status(400).json({ status_code: 'invalid_url' });
    const cachedUrl = NodeCache_1.nodeCache.get(url);
    if (cachedUrl)
        return res.status(301).redirect(cachedUrl.long);
    next();
};
exports.checkUrlCache = checkUrlCache;
const checkValidUrl = async (req, res, next) => {
    const { url } = req.params;
    if (!url)
        return res.status(400).json({ status_code: 'invalid_url' });
    const foundUrl = await (0, urls_1.getUrl)({ short: url }, { short: 1, long: 1, _id: 0 });
    if (!foundUrl)
        return res.status(404).json({ status_code: 'not_found' });
    res.locals.foundUrl = foundUrl;
    NodeCache_1.nodeCache.set(url, foundUrl);
    next();
};
exports.checkValidUrl = checkValidUrl;
//# sourceMappingURL=urls.js.map