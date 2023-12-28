import { IUrl } from "../interfaces";
type IGetUrl = IUrl | null;
export declare const getUrl: (searchBy: Object, project: Object) => Promise<IGetUrl>;
export {};
