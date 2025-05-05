import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Project API',
            version: '1.0.0',
            description: 'API for managing projects and images',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Project: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        mainImage: { type: 'string', format: 'uri' },
                        otherImages: {
                            type: 'array',
                            items: { type: 'string', format: 'uri' },
                        },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                        __v: { type: 'number' },
                    },
                },
            },
        },
    },
    apis: ['./app/api/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
