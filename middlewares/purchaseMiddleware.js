import Customer from '../models/Customer.js';
import Manager from '../models/Manager.js';
import Chief from '../models/Chief.js';
import Product from '../models/Product.js';

const validateAndFetchPurchaseData = async (req, res, next) => {
  try {
    let { customerId, productId , quantity } = req.body;

    customerId = parseInt(customerId);
    productId = parseInt(productId);
    quantity = parseInt(quantity);

    // Validate input
    if (!Number.isInteger(customerId) || !Number.isInteger(productId)) {
      return res.status(400).json({ error: 'Invalid customer or product ID' });
    }

    if (!Number.isInteger(quantity) || req.body.quantity <= 0) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    // Fetch customer and product
    const customer = await Customer.findOne({ customerId });
    if (!customer) return res.status(404).json({ error: 'Customer not found' });

    const product = await Product.findOne({ productId });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    if( product.stock < quantity) return res.status(404).json({ error: 'Not enough stock' })

    
    // Fetch related manager and chief
    const manager = await Manager.findOne({ managerId: customer.managerId });
    if (!manager) return res.status(404).json({ error: 'Manager not found' });
    if (!manager.managerId) {
      return res.status(400).json({ error: 'Manager ID is missing or invalid' });
    }
    
    const chief = await Chief.findOne({ chiefId: manager.chiefId });
    if (!chief) return res.status(404).json({ error: 'Chief not found' });
    if (!chief.chiefId) {
      return res.status(400).json({ error: 'Chief ID is missing or invalid' });
    }


    // Attach data to the request object
    req.purchaseData = {
      customer,
      product,
      manager,
      chief,
      quantity,
    };

    next();
  } catch (error) {
    console.log(error); // Pass error to the error handler
  }
};

export { validateAndFetchPurchaseData }