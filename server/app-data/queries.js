/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  createUser: 'INSERT INTO dalfoodbank.User(BannerId,FirstName,LastName,Password,Email,RoleId) VALUES (?,?,?,?,?,?)',
  getRoles: 'SELECT * FROM dalfoodbank.Role',
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
  getProductsByName: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemName LIKE ?
    ORDER BY I.ItemId`,
  getProductsByCategory: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE I.CategoryId IN (?)
    ORDER BY I.ItemId`,
  getProductsByNameAndCategory: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemName LIKE ? AND I.CategoryId IN (?)
    ORDER BY I.ItemId`,
  deleteProduct: `DELETE FROM dalfoodbank.Item WHERE ItemId = ?;`,
  signIn: `SELECT * from dalfoodbank.User where BannerId = ? AND Password = ?`,
  getCartProducts: `SELECT *
    FROM dalfoodbank.Cart as C LEFT JOIN dalfoodbank.Item as I
    ON C.ItemId = I.ItemId
    LEFT JOIN dalfoodbank.Category as Ca
    ON I.CategoryId = Ca.CategoryId
    where C.BannerId= ? AND C.Status='true'`,
  addProductToCart: `INSERT INTO dalfoodbank.Cart Values (?, ?, ?, ?)`,
  deleteProductFromCart: `DELETE FROM dalfoodbank.Cart WHERE ItemId = ? AND BannerId = ? AND Status = 'true'`,
  isProductAvailableInCart: `SELECT * FROM dalfoodbank.Cart WHERE ItemId = ? AND BannerId = ? AND Status = 'true'`,
};
