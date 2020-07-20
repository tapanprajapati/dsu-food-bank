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

function EmployeeService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
EmployeeService.prototype.getAll = async function getAll() {
  const getAllEmployeeQuery = queries.getEmployee;
  console.log(`The Query for fetching all Employee Details - ${getAllEmployeeQuery}`);
  try {
    let result = await database.query(getAllEmployeeQuery);
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

EmployeeService.prototype.addUserRole = async function addUserRole(data) {
  const newUserquery = mysql.format(queries.addUserRole, [data.BannerId, data.RoleId]);

  console.log(`The Query for creating a job entry - ${newUserquery}`);

  try {
    let items = await database.query(newUserquery);
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

EmployeeService.prototype.deleteUserRole = async function deleteUserRole(params) {
  const deleteUserRoleQuery = mysql.format(queries.deleteUserRole, [params.BannerId, params.RoleId]);
  console.log(`The Query for delete a employee information - ${deleteUserRoleQuery}`);
  try {
    let items = await database.query(deleteUserRoleQuery);
    if (items.affectedRows == 0) {
      return {
        success: true,
        statusCode: 200,
        items,
        message: 'User with BannerId does not exist',
      };
    } else {
      return {
        success: true,
        statusCode: 200,
        items,
      };
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = EmployeeService;
