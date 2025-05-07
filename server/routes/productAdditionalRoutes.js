const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get products by client
router.get('/client/:client', async (req, res) => {
  try {
    const products = await Product.find({ client: req.params.client });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get products within a date range
router.get('/date-range', async (req, res) => {
  const { startDate, endDate } = req.query;
  
  try {
    const products = await Product.find({
      startDate: { $gte: new Date(startDate) },
      endDate: { $lte: new Date(endDate) }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get products by status (active/inactive)
router.get('/status/:status', async (req, res) => {
  try {
    const products = await Product.find({
      startDate: { $lte: new Date() },
      endDate: { $gte: new Date() }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get products with pagination
router.get('/paginate', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);
    
    const count = await Product.countDocuments();
    
    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get products sorted by date
router.get('/sort/:field', async (req, res) => {
  const { field } = req.params;
  const { order = 'asc' } = req.query;
  
  try {
    const products = await Product.find()
      .sort({ [field]: order === 'asc' ? 1 : -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
