import Transaction from '../models/Transaction.js';

export const purchaseProduct = async (req, res) => {
  try {
    const { customer, product, manager, chief , quantity } = req.purchaseData;

    const totalAmount = product.price * quantity;
    const managerEarnings = totalAmount * 0.05;
    const chiefEarnings = totalAmount * 0.025;

    // Record the transaction
    const transaction = new Transaction({
      customerId: customer.customerId,
      productId: product.productId,
      managerId: manager.managerId,
      chiefId: chief.chiefId,
      quantity: quantity,
      amount: totalAmount,
      managerEarnings,
      chiefEarnings,
    });
    await transaction.save();

    // Update earnings
    manager.earnings += managerEarnings;
    await manager.save();

    chief.earnings += chiefEarnings;
    await chief.save();

    product.stock -= quantity;
    await product.save();

    res.status(201).json({
      message: 'Transaction recorded successfully.',
      transaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
