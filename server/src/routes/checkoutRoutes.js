/**
 * @author Samkit Shah <samkit@dal.ca>
 */
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const CheckoutService = require('src/services/CheckoutService');
const CheckoutController = require('src/controllers/CheckoutController');
const checkoutController = new CheckoutController(new CheckoutService());
const { authenticateRoute } = require('src/helpers/auth');

/**
 * GET: /api/products endpoint to get records for provided userId and jobname
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "result": [] }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route('').post(checkoutController.createOrder);

module.exports = router;
