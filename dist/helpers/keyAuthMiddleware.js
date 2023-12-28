"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyAuthMiddleware = void 0;
const keyAuthMiddleware = (req, res, next) => {
    if (req.method !== 'OPTIONS' &&
        (!req.headers['x-api-key'] ||
            req.headers['x-api-key'] !== process.env.DEFAULT_API_KEY)) {
        return res.status(401).json({ msg: "Missing or incorrect API key" });
    }
    next();
};
exports.keyAuthMiddleware = keyAuthMiddleware;
//# sourceMappingURL=keyAuthMiddleware.js.map