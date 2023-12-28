import { Request, Response } from "express";
import { IUrl } from "./interfaces";

export const redirect = async(req: Request, res: Response) => {
    {/* @ts-ignore */}
    const {foundUrl}:IUrl | null = res.locals;
    return res.status(301).redirect(foundUrl!.long) 
}