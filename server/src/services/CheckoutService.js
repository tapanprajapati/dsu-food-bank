const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function CheckoutService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */

CheckoutService.prototype.createOrder = async function createOrder(data) {
  const createOrderquery = mysql.format(queries.createOrder, [
    data.bannerId,
    data.pickupDate,
    'PENDING',
    data.pickupTime,
  ]);
  console.log(`The Query for creating a Order entry - ${createOrderquery}`);
  try {
    let items = await database.query(createOrderquery);
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: 'Please try after some time.',
      error,
    };
  }
};
module.exports = CheckoutService;
