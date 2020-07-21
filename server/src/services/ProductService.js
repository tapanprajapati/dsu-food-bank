/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the product resource communicating with the database and transforming the response for front-end
 */

const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');
const { formatProducts } = require('../helpers/formatters/formatter');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function ProductService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
ProductService.prototype.getAll = async function getAll(queryParams) {
  let getAllProductsQuery = generateProductAccessQuery(queryParams);

  console.log(`The Query for fetching all products - ${getAllProductsQuery}`);

  try {
    let result = await database.query(getAllProductsQuery);

    const products = formatProducts(result);
    return {
      success: true,
      statusCode: 200,
      items: products,
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
  console.log(`The Query to fetch product details - ${getProductByIdQuery}`);

  try {
    let result = await database.query(getProductByIdQuery);

    const products = formatProducts(result);
    return {
      success: true,
      statusCode: 200,
      items: products,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

function generateProductAccessQuery(queryParams) {
  let getAllProductsQuery;
  if (JSON.stringify(queryParams) != '{}') {
    if (queryParams.search && queryParams.filter) {
      getAllProductsQuery = mysql.format(queries.getProductsByNameAndCategory, [
        `%${queryParams.search}%`,
        decodeURIComponent(queryParams.filter),
      ]);
    } else if (queryParams.search) {
      getAllProductsQuery = mysql.format(queries.getProductsByName, `%${queryParams.search}%`);
    } else if (queryParams.filter) {
      getAllProductsQuery = mysql.format(queries.getProductsByCategory, decodeURIComponent(queryParams.filter));
    }
  } else {
    getAllProductsQuery = queries.getProducts;
  }

  return getAllProductsQuery;
}

module.exports = ProductService;
