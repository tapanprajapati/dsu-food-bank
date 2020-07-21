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

ProductService.prototype.getSpecific = async function getSpecific(params) {
  const getSpecificProductsQuery = mysql.format(queries.getSpecificProduct, [parseInt(params.itemId)]);
  console.log(`The Query for fetching specific product - ${getSpecificProductsQuery}`);
  try {
    let result = await database.query(getSpecificProductsQuery);
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

ProductService.prototype.create = async function create(data) {
  const getCreateProductQuery = mysql.format(queries.createProduct, [
    data.name,
    data.desc,
    data.categoryId,
    data.availableQty,
    data.limit,
  ]);
  console.log(`The Query for creating product - ${getCreateProductQuery}`);
  try {
    let result = await database.query(getCreateProductQuery);
    return {
      success: true,
      statusCode: 200,
      result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

ProductService.prototype.update = async function update(data, id) {
  const getUpdateProductQuery = mysql.format(queries.updateProduct, [
    data.name,
    data.desc,
    data.categoryId,
    data.availableQty,
    data.limit,
    id,
  ]);
  console.log(`The Query for updating product - ${getUpdateProductQuery}`);
  try {
    let result = await database.query(getUpdateProductQuery);
    return {
      success: true,
      statusCode: 200,
      result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = ProductService;
