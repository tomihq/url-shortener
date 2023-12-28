import { NextFunction, Request, Response } from "express";
import { nodeCache } from "../classes/NodeCache";
import { IUrl } from "../interfaces";
import { getUrl } from "../queries/urls";

export const checkUrlCache = async(req: Request, res: Response, next: NextFunction) => {
    const { url } = req.params;
    if(!url) return res.status(400).json({status_code: 'invalid_url'});
    const cachedUrl:IUrl | null | undefined = nodeCache.get(url);
    if(cachedUrl)  return res.status(301).redirect(cachedUrl!.long) 
    next();
   
}
 
export const checkValidUrl = async(req: Request, res: Response, next: NextFunction) => {
    const { url } = req.params;
    if(!url) return res.status(400).json({status_code: 'invalid_url'});
    const foundUrl: IUrl | null = await getUrl({short: url}, {short: 1, long: 1, _id:0});
    if(!foundUrl) return res.status(404).json({status_code: 'not_found'});
    res.locals.foundUrl = foundUrl;
    nodeCache.set(url, foundUrl);
    next();
}