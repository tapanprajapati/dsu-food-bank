/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  getEmployee: `SELECT 
    user.BannerId,
    user.FirstName,
    user.LastName,
    user.Email,
    user.RoleId,
    role.RoleName
FROM
    User AS user,
    Role AS role
WHERE
    role.RoleId = user.RoleId
        AND user.RoleId != 3`,
  deleteUserRole: 'update User SET RoleId = 3 where BannerId = ? and RoleId = ?',
  addUserRole: 'update User SET RoleId = ? where FirstName = ?',
  createProduct:
    'INSERT INTO `dalfoodbank`.`Item` (`ItemName`,`ItemDescription`,`CategoryId`,`AvailableQuantity`,`ItemLimit`) VALUES (?,?,?,?,?);',
  updateProduct:
    'UPDATE `dalfoodbank`.`Item` SET `ItemName` = ?,`ItemDescription` = ?,`CategoryId` = ?,`AvailableQuantity` = ?,`ItemLimit` = ? WHERE `ItemId` = ?;',

  getProducts: `SELECT * 
    FROM 
    dalfoodbank.Item as I
      LEFT JOIN 
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    ORDER BY I.ItemId`,
  getCategories: `SELECT * FROM dalfoodbank.Category`,
  getProductById: `SELECT *
    FROM 
    dalfoodbank.Item as I 
      LEFT JOIN 
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemId = ?`,
  deleteProduct: `DELETE FROM dalfoodbank.Item WHERE ItemId = ?;`,
  signIn: '',
  getRole: 'SELECT * FROM dalfoodbank.Role',
  getStudent: 'select * from User where RoleId = 3',
};
