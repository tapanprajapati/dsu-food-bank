/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the cart resource communicating with the database and transforming the response for front-end
 */

const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function CartService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
CartService.prototype.getAll = async function getAll() {
  const getCartProductsQuery = queries.getCartProducts;
  console.log(`The Query for fetching all products from cart - ${getCartProductsQuery}`);
  try {
    let result = await database.query(getCartProductsQuery);
    return {
      success: true,
      statusCode: 200,
      items: result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = CartService;
