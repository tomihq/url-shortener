import { IUrl } from "../interfaces";
import Url from "../models/Url";

type IGetUrl = IUrl | null

export const getUrl = async(searchBy:Object, project:Object): Promise<IGetUrl> => {
    let response: IUrl | null = null;
    try {
        const foundUrl:IUrl | null = await Url.findOne(searchBy, project);
        if(foundUrl) response = foundUrl
    } catch (error) {
        console.log(error)
    }

    return response;

}