import { Response } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { AboutShortedUrlSchema } from "../validations";
export declare const aboutShortedUrl: (req: ValidatedRequest<AboutShortedUrlSchema>, res: Response) => Promise<Response<any, Record<string, any>>>;
