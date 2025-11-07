const express = require('express');
const router = express.Router();
const prisma = require('../../prisma/client');
const { createProductSchema, updateProductSchema } = require('../../validations/product');
const generateSlug = require('../../middleware/generateSlug');

// Get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Get single product by ID
router.get('/:id', async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Create product with validation
router.post('/', generateSlug, async (req, res, next) => {
  try {
    const validatedData = createProductSchema.parse(req.body);

    const product = await prisma.product.create({
      data: validatedData
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

// Update product with validation
router.patch('/:id', generateSlug, async (req, res, next) => {
  try {
    const validatedData = updateProductSchema.parse(req.body);

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: validatedData
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Delete product
router.delete('/:id', async (req, res, next) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
