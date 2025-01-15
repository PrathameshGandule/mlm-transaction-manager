import { Schema , model } from "mongoose";

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true, // Sale price of the product
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0, // Available stock
    },
}, { timestamps: true });

const Product = model('Product', productSchema);

export default Product