/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const CartService = require('src/services/CartService');
const CartController = require('src/controllers/CartController');
const cartController = new CartController(new CartService());
const { authenticateRoute } = require('src/helpers/auth');

/**
 * GET: /api/cart endpoint to get records for provided userId and jobname
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "result": [] }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/`).get(cartController.getAll).route('/').post(cartController.addProductToCart);

router.route(`/:productId`).delete(cartController.deleteProductFromCart);

module.exports = router;
