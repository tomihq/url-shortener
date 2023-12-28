import { NextFunction, Request, Response } from "express";
import Url from "../models/Url";

export const checkValidUrl = async(req: Request, res: Response, next: NextFunction) => {
    const { url } = req.params;
    if(!url) return res.status(400).json({status_code: 'invalid_url'});
    const foundUrl = await Url.findOne({short: url}, {short: 1, long: 1});
    if(!foundUrl) return res.status(404).json({status_code: 'not_found'});
    res.locals.foundUrl = foundUrl;
    next();
}