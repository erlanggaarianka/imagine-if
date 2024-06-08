import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number; // Optional property
    height?: number; // Optional property
    config?: object; // Optional property
    transformationUrl?: string; // Optional property
    aspectRatio?: string; // Optional property
    color?: string; // Optional property
    prompt?: string; // Optional property
    author?: {
        _id: string,
        firstName: string,
        lastName: string
    }
    createdAt?: Date; // Optional property with default value
    updatedAt?: Date; // Optional property with default value
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('Image', ImageSchema)

export default Image