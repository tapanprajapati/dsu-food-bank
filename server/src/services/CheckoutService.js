/**
 * @author Samkit Shah <samkit@dal.ca>
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

function CheckoutService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */

// method to create an order.
CheckoutService.prototype.createOrder = async function createOrder(data, banner) {
  const date = data.pickupDate;
  const time = data.pickupTime;

  // This dateTime is created to match the format of the database field.
  const dateTime = date + ' ' + time + ':00';
  const today = new Date();

  // By default the status of the order will be placed initially.
  const status = 'placed';

  // Query to create an order in order table.
  const createOrderquery = mysql.format(queries.createOrder, [banner, today, status, dateTime]);
  console.log(`The Query for creating a Order entry - ${createOrderquery}`);

  // fetch an order id for the recent order by user
  fetchidquery = mysql.format(queries.fetchOrderId, [banner]);
  console.log(`Query to fetch order Id-${fetchidquery}`);

  // fetch the products in the cart to add in orderdetails table
  const getCartProductsQuery = mysql.format(queries.getCartProducts, banner);
  console.log(`The Query for fetching all products from cart - ${getCartProductsQuery}`);
  try {
    let items = await database.query(createOrderquery);
    const id = await database.query(fetchidquery);
    let result = await database.query(getCartProductsQuery);
    const cartItems = formatProducts(result);
    console.log('Order ID:' + id[0].OrderId);

    // This loop will add all the products into the orderdetails table.
    for (var i = 0; i < Object.keys(cartItems).length; i++) {
      var keys = Object.keys(cartItems[i]);
      let result = await database.query(
        mysql.format(queries.createOrderdetails, [id[0].OrderId, cartItems[i][keys[0]], cartItems[i][keys[3]]])
      );
    }
    const deletecartquery = mysql.format(queries.deletecart, banner);
    let rs = await database.query(deletecartquery);
    return {
      success: true,
      statusCode: 200,
      message: 'Order placed successfully.',
    };
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
