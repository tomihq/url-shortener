import mongoose, {Schema, Model, model} from "mongoose";
import { IUser } from "../interfaces";

type User = IUser | Document

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    lastLogin: { type: Date, default: Date.now()}
},
{
    timestamps: true
}
)

const User:Model<User> = mongoose.models.User || model('User', userSchema);
export default User;