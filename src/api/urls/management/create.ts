import { RequestHandler } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { CreateShortUrlSchema } from "../validations";
import { randomStr } from "../../../helpers/base62";
import Url from "../../../models/Url";
import { API_DOMAIN } from "../../../config";

export const createShortedUrl: RequestHandler = async(req: ValidatedRequest<CreateShortUrlSchema>,
    res,
  ) =>{

    const { url } = req.body;
    const shortUrl = randomStr(7);

    const data = {
      long: url,
      short: shortUrl,
      userId: "658d8eb200529225568e79ad" 
    }
    await Url.create(data)

    return res.json({ success: true, shortUrl: `${API_DOMAIN}/${shortUrl}` })
    
}