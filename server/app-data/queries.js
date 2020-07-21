/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  createUser: 'INSERT INTO dalfoodbank.User(BannerId,FirstName,LastName,Password,Email) VALUES (?,?,?,?,?)',
  createRole: 'INSERT INTO dalfoodbank.UserRole (BannerId,Roleid) VALUES (?,?)',
  getRoles: 'SELECT * FROM dalfoodbank.Role',
};
