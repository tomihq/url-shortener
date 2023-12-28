import mongoose, {Schema, Model, model} from "mongoose";
import { IUrl } from "../interfaces/";

type Url = IUrl | Document

const urlSchema = new Schema({
    short: { type: String, required: true },
    long: { type: String, required: true },
    lastVisited: { type: Date, default: Date.now()},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{
    timestamps: true
}
)

const Url:Model<Url> = mongoose.models.Url || model('Url', urlSchema);
export default Url;