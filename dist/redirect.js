"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = void 0;
const redirect = async (req, res) => {
    { /* @ts-ignore */ }
    const { foundUrl } = res.locals;
    return res.status(301).redirect(foundUrl.long);
};
exports.redirect = redirect;
//# sourceMappingURL=redirect.js.map