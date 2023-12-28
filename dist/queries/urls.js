"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
const Url_1 = __importDefault(require("../models/Url"));
const getUrl = async (searchBy, project) => {
    let response = null;
    try {
        const foundUrl = await Url_1.default.findOne(searchBy, project);
        if (foundUrl)
            response = foundUrl;
    }
    catch (error) {
        console.log(error);
    }
    return response;
};
exports.getUrl = getUrl;
//# sourceMappingURL=urls.js.map