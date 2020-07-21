/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the category resource communicating with the database and transforming the response for front-end
 */

const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');
const { formatCatgories } = require('../helpers/formatters/formatter');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function CategoryService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
CategoryService.prototype.getAll = async function getAll() {
  const getCategoriesQuery = queries.getCategories;
  console.log(`The Query for fetching all products from cart - ${getCategoriesQuery}`);
  try {
    let result = await database.query(getCategoriesQuery);
    const categories = formatCatgories(result);
    return {
      success: true,
      statusCode: 200,
      items: categories,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = CategoryService;
