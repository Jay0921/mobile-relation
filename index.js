require('dotenv').config();
const express = require('express');
const prisma = require('./prisma/client');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
