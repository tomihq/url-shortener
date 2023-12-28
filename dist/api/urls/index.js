"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_joi_validation_1 = require("express-joi-validation");
const validations_1 = require("./validations");
const management_1 = require("./management");
const middlewares_1 = require("../../middlewares");
const validator = (0, express_joi_validation_1.createValidator)({
    passError: true,
});
const routerWelcome = (0, express_1.Router)();
routerWelcome.post('/', validator.body(validations_1.schemas.createShortedUrl), management_1.createShortedUrl);
routerWelcome.get('/:url', [validator.params(validations_1.schemas.aboutShortedUrl), middlewares_1.checkValidUrl], management_1.aboutShortedUrl);
exports.default = routerWelcome;
//# sourceMappingURL=index.js.map