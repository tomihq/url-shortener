import { ObjectId } from "mongoose";

export interface IUrl {
    short: string;
    long: string;
    createdAt: Date;
    lastVisited: Date;
    updatedAt: Date;
    userId: ObjectId
}
