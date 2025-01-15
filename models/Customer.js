import { Schema , model } from "mongoose";

const customerSchema = new Schema({
    customerId: {
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
    managerId: {
        type: Number,
        ref: 'Manager', // Reference to the Manager
        required: true,
    },
}, { timestamps: true });

const Customer = model('Customer', customerSchema);

export default Customer