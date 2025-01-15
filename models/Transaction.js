import { Schema , model } from "mongoose";

const transactionSchema = new Schema({
    customerId: {
        type: Number,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    managerId: {
        type: Number,
        required: true,
    },
    chiefId: {
        type: Number,   
        required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    amount: {
        type: Number,
        required: true, // Total sale amount
    },
    managerEarnings: {
        type: Number,
        required: true, // Earnings for the Manager from this transaction
    },
    chiefEarnings: {
        type: Number,
        required: true, // Earnings for the Chief from this transaction
    },
    date: {
        type: Date,
        default: Date.now, // Date of the transaction
    },
}, { timestamps: true });

const Transaction = model('Transaction', transactionSchema);

export default Transaction