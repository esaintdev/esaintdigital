const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const upload = require('../middleware/upload');
const fs = require('fs');
const path = require('path');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new product
router.post('/', upload.single('picture'), async (req, res) => {
  const product = new Product({
    name: req.body.name,
    title: req.body.title,
    picture: req.file ? req.file.path : '',
    description: req.body.description,
    category: req.body.category,
    client: req.body.client,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update product
router.patch('/:id', upload.single('picture'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    console.log('Request body:', req.body);
    console.log('Request file:', req.file);

    // Create an update object with only the fields that were provided
    const updateFields = {};
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== '') {
        updateFields[key] = req.body[key];
      }
    });

    // Handle picture update
    if (req.file) {
      // Delete old picture if it exists
      if (product.picture) {
        const oldImagePath = path.join(__dirname, '..', 'uploads', path.basename(product.picture));
        try {
          fs.unlinkSync(oldImagePath);
          console.log('Old image deleted successfully');
        } catch (err) {
          console.error('Failed to delete old image:', err.message);
        }
      }
      updateFields.picture = req.file.path;
    }

    // Update the product with the new fields
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.error('Update error:', err);
    res.status(400).json({ message: err.message });
  }
});

// DELETE product and its image
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Delete image file if it exists
    if (product.picture) {
      const fileName = path.basename(product.picture);
      const imagePath = path.join(__dirname, '..', 'uploads', fileName);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Failed to delete image file:', err.message);
      });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
