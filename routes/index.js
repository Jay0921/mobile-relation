const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swagger');
const v1Routes = require('./v1');
const basicAuth = require('express-basic-auth');

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API version routes
router.use('/v1', v1Routes);

// Swagger documentation with basic auth protection
const swaggerAuth = basicAuth({
  users: { [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD },
  challenge: true,
  realm: 'Swagger Documentation'
});
router.use('/api-docs', swaggerAuth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve static files from tmp storage directory
const path = require('path');
router.use('/uploads', express.static(path.join(__dirname, '..', 'tmp', 'storage')));

module.exports = router;
