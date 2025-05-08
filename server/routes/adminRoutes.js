const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const Product = require('../models/Product');

// Admin dashboard
router.get('/', adminAuth, async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      user: req.user,
      products: products,
      totalProducts: products.length
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CRUD operations for products
router.get('/products', adminAuth, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/products', adminAuth, upload.single('picture'), async (req, res) => {
  try {
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

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/products/:id', adminAuth, upload.single('picture'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const updateFields = {};
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== '') {
        updateFields[key] = req.body[key];
      }
    });

    if (req.file) {
      if (product.picture) {
        const oldImagePath = path.join(__dirname, '..', 'uploads', path.basename(product.picture));
        try {
          fs.unlinkSync(oldImagePath);
        } catch (err) {
          console.error('Failed to delete old image:', err.message);
        }
      }
      updateFields.picture = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/products/:id', adminAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.picture) {
      const imagePath = path.join(__dirname, '..', 'uploads', path.basename(product.picture));
      try {
        fs.unlinkSync(imagePath);
      } catch (err) {
        console.error('Failed to delete image file:', err.message);
      }
    }

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
