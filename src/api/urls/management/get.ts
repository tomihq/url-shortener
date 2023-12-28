import {  Response } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { AboutShortedUrlSchema } from "../validations";

export const aboutShortedUrl = async(req: ValidatedRequest<AboutShortedUrlSchema>,
    res: Response,
  ) =>{
    const foundUrl = res.locals.foundUrl
    return res.json({ success: true, url:foundUrl})
    
}