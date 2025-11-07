const { slugify } = require('../utils/slugify');

/**
 * Middleware to auto-generate slug from name if not provided
 */
const generateSlug = (req, res, next) => {
  if (req.body.name && !req.body.slug) {
    req.body.slug = slugify(req.body.name);
  }
  next();
};

module.exports = generateSlug;
