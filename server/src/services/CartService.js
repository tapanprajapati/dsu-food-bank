/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the cart resource communicating with the database and transforming the response for front-end
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

function CartService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
CartService.prototype.getAll = async function getAll(bannerId) {
  const getCartProductsQuery = mysql.format(queries.getCartProducts, bannerId);
  console.log(`The Query for fetching all products from cart - ${getCartProductsQuery}`);
  try {
    let result = await database.query(getCartProductsQuery);
    const cartItems = formatProducts(result);
    return {
      success: true,
      statusCode: 200,
      items: cartItems,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

CartService.prototype.addProductToCart = async function addProductToCart(cartItem, bannerId) {
  const addProductToCartQuery = mysql.format(queries.addProductToCart, [
    bannerId,
    cartItem.itemId,
    cartItem.itemQuantity,
    'true',
  ]);
  console.log(`The Query to add an item in ${bannerId}'s cart - ${addProductToCartQuery}`);
  try {
    let result = await database.query(addProductToCartQuery);
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

CartService.prototype.deleteProductFromCart = async function deleteProductFromCart(productId, bannerId) {
  const deleteProductFromCartQuery = mysql.format(queries.deleteProductFromCart, [productId, bannerId]);
  console.log(`The Query to delete a product from ${bannerId}'s cart - ${deleteProductFromCartQuery}`);
  try {
    let result = await database.query(deleteProductFromCartQuery);
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

CartService.prototype.isProductAvailableInCart = async function isProductAvailableInCart(productId, bannerId) {
  const isProductAvailableInCartQuery = mysql.format(queries.isProductAvailableInCart, [productId, bannerId]);
  console.log(`The Query to check whether a product exist in ${bannerId}'s cart - ${isProductAvailableInCartQuery}`);
  try {
    let result = await database.query(isProductAvailableInCartQuery);
    const isProductAvailable = result.length === 1;
    // TODO: Should I pass in product in result key?
    return {
      success: isProductAvailable ? true : false,
      statusCode: 200,
      result: isProductAvailable ? true : false,
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
