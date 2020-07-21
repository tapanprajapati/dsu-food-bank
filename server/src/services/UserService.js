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

UserService.prototype.createUser = async function createUser(data) {
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  const plain_password = data.password;
  const cipher_password = bcrypt.hashSync(plain_password, saltRounds);
  const createUserquery = mysql.format(queries.createUser, [
    data.bannerId,
    data.firstName,
    data.lastName,
    cipher_password,
    data.email,
  ]);
  const createRolequery = mysql.format(queries.createRole, [data.bannerId, data.role]);
  console.log(`The Query for creating a User entry - ${createUserquery}`);
  console.log(`The Query for creating a Role entry - ${createRolequery}`);
  try {
    let items = await database.query(createUserquery);
    let items1 = await database.query(createRolequery);
    return {
      success: true,
      statusCode: 200,
      items,
      items1,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

UserService.prototype.getRoles = async function getRoles() {
  const getRolesquery = queries.getRoles;
  console.log(`The Query for returning all roles information - ${getRolesquery}`);
  try {
    let items = await database.query(getRolesquery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};
module.exports = UserService;
