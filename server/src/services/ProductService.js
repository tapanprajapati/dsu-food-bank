/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */

const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function ProductService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
ProductService.prototype.getAll = async function getAll() {
  const getAllProductsQuery = queries.getProducts;
  console.log(`The Query for fetching all products - ${getAllProductsQuery}`);
  try {
    let result = await database.query(getAllProductsQuery);
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

ProductService.prototype.getProductById = async function getProductById(id) {
  const getProductByIdQuery = mysql.format(queries.getProductById, id);
};

module.exports = ProductService;
