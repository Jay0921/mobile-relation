const errorHandler = (err, req, res, next) => {
  // Zod validation errors
  if (err.name === 'ZodError') {
    const errors = err.issues || err.errors || [];
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }))
    });
  }

  // Prisma errors
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Resource not found' });
  }

  if (err.code === 'P2002') {
    return res.status(409).json({
      error: 'Unique constraint violation',
      field: err.meta?.target
    });
  }

  // Default error
  res.status(500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message
  });
};

module.exports = errorHandler;
