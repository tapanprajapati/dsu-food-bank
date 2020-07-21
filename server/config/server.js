/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { ValidationError } = require('express-validation');

const productRoutes = require('src/routes/productRoutes');
const categoryRoutes = require('src/routes/categoryRoutes');
const userRoutes = require('src/routes/userRoutes');
const employeeRoutes = require('src/routes/employeeRoutes');

/**
 * Express server initialization
 */
const server = express();

/**
 * Application configuration
 * enable all cors requests
 * todo: https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin
 */
server.use(cors());
server.use(bodyParser.json());

/**
 * Base route
 */
server.get('/', (req, res) => res.sendStatus(200));

/**
 * Application routes
 */
server.use('/api/products', productRoutes);
server.use('/api/categories', categoryRoutes);
server.use('/api', userRoutes);
server.use('/api/employee', employeeRoutes);
server.use('/api/employee/:BannerId/:RoleId', employeeRoutes);
server.use('api/employee/add', employeeRoutes);

/**
 * Handling unexpected and validation errors
 */
server.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

module.exports = server;
