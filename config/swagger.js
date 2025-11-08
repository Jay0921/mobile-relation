const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mobile Relation API',
      version: '1.0.0',
      description: 'API documentation for Mobile Relation',
    },
    servers: [
      {
        url: 'http://api.lvh.me:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['id', 'name', 'slug', 'createdAt', 'updatedAt'],
          properties: {
            id: {
              type: 'integer',
              description: 'Product ID',
            },
            name: {
              type: 'string',
              description: 'Product name',
            },
            slug: {
              type: 'string',
              description: 'URL-friendly slug',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp',
            },
          },
        },
        ProductInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              minLength: 1,
              maxLength: 255,
              description: 'Product name',
            },
            slug: {
              type: 'string',
              pattern: '^[a-z0-9-]+$',
              maxLength: 255,
              description: 'URL-friendly slug (auto-generated if not provided)',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
            details: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                  },
                  message: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./routes/**/*.js'],
};

module.exports = swaggerJsdoc(options);
