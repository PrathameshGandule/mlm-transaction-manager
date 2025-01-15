import { Schema , model } from "mongoose";

const managerSchema = new Schema({
    managerId: {
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
    chiefId: {
        type: Number,
        ref: 'Chief', // Reference to the Chief
        required: true,
    },
    earnings: {
        type: Number,
        default: 0, // Total earnings from sales
    },
}, { timestamps: true });

const Manager = model('Manager', managerSchema);

export default Manager