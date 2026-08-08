const express = require("express");
const jwt = require("jsonwebtoken");
const Order = require("../models/Order");

const router = express.Router();

// Place Order
router.post("/", async (req, res) => {
  try {
    // Get JWT token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { products, totalPrice } = req.body;

    // Create new order
    const order = new Order({
      user: decoded.userId,
      products,
      totalPrice,
      status: "Pending",
    });

    await order.save();

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id,
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
});

module.exports = router;