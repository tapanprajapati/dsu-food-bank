/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 * Defining layers for different category routes. It follows below track:
 * 1) Authenticating route
 * 2) Validating the schema for params or body or queryParams
 * 3) calling appropriate controller for the route
 *
 */
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const CategoryService = require('src/services/CategoryService');
const CategoryController = require('src/controllers/CategoryController');
const categoryController = new CategoryController(new CategoryService());
const categorySchema = require('../helpers/validate/categorySchema');

/**
 * GET: /api/categories endpoint to get all available categories
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "items": [] }
 * SQL OR unexpected errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/`).get(categoryController.getAll).post(validate(categorySchema.addCategory), categoryController.create);

router.route(`/:id`).put(validate(categorySchema.updateCategory), categoryController.update);

module.exports = router;
