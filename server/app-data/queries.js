/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  getEmployee:
    'select user.BannerId,user.FirstName,user.LastName,user.Email,userrole.RoleId, role.RoleName from User as user , UserRole as userrole, Role as role where userrole.BannerId = user.BannerId and role.RoleId= userrole.RoleId and  userrole.RoleId != 3',
  deleteUserRole: 'delete from UserRole where BannerId = ? and RoleId = ?',
  addUserRole: 'Insert into UserRole (BannerId, RoleId) values (?, ?)',
};
