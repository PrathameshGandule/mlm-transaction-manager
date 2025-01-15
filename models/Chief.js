import { Schema , model } from "mongoose";

const chiefSchema = new Schema({
    chiefId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    earnings: {
        type: Number,
        default: 0, // Total earnings from sales
    },
}, { timestamps: true });

const Chief = model('Chief', chiefSchema);

export default Chief
