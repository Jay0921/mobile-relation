const express = require('express');
const router = express.Router();
const v1Routes = require('./v1');

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API version routes
router.use('/v1', v1Routes);

module.exports = router;
