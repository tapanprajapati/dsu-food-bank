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

module.exports = CheckoutService;
