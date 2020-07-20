/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */
const express = require('express');
const router = express.Router();

const CategoryService = require('src/services/CategoryService');
const CategoryController = require('src/controllers/CategoryController');
const categoryController = new CategoryController(new CategoryService());

/**
 * GET: /api/categories endpoint to get all available categories
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "items": [] }
 * SQL OR unexpected errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/`).get(categoryController.getAll);

module.exports = router;
