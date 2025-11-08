const { z } = require('zod');

const createProductSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  slug: z.string()
    .min(1)
    .max(255)
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .optional(),
  image: z.string().optional()
});

const updateProductSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  slug: z.string()
    .min(1)
    .max(255)
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .optional(),
  image: z.string().optional()
});

module.exports = {
  createProductSchema,
  updateProductSchema
};
