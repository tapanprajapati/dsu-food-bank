/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const ProductService = require('src/services/ProductService');
const ProductController = require('src/controllers/ProductController');
const productController = new ProductController(new ProductService());
const { authenticateRoute } = require('src/helpers/auth');

/**
 * GET: /api/products endpoint to get records for provided userId and jobname
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "result": [] }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/`).get(productController.getAll);

/**
 * GET: /api/products/:productId
 */
router.route(`/:productId`).get(productController.getProductById);

// router.route(`/:name`).get(productController.getProductByName);

module.exports = router;
