/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the user resource communicating with the database and transforming the response for front-end
 */
const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');
const { formatUsers } = require('../helpers/formatters/formatter');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function UserService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
UserService.prototype.authenticate = async function authenticate(credentials) {
  const signInQuery = mysql.format(queries.signIn, [credentials.bannerId, credentials.password]);
  console.log(`The Query for finding user entry - ${signInQuery}`);
  try {
    let result = await database.query(signInQuery);
    const users = formatUsers(result);

    if (users.length === 0) {
      return {
        success: false,
        statusCode: 404,
        message: 'user not found',
      };
    }
    if (users.length === 1) {
      if (users[0].password === credentials.password) {
        return {
          success: true,
          statusCode: 200,
          user: users[0], // Todo: remove password from the object
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
