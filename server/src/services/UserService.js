/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the user resource communicating with the database and transforming the response for front-end
 */
const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function UserService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
UserService.prototype.authenticate = async function authenticate(data) {
  const signInQuery = mysql.format(queries.signIn, data.userId);
  console.log(`The Query for finding user entry - ${signInQuery}`);
  try {
    let result = await database.query(signInQuery);

    if (result.length === 0) {
      return {
        success: false,
        statusCode: 404,
        message: 'user not found',
      };
    }
    if (result.length === 1) {
      if (result[0].password === data.password) {
        return {
          success: true,
          statusCode: 200,
        };
      } else {
        return {
          success: false,
          statusCode: 400,
          message: 'incorrect password',
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = UserService;
