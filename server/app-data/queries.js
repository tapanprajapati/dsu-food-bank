/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item join(dalfoodbank.Category) using(CategoryId) order by ItemId;',
  getSpecificProduct:
    'SELECT * FROM dalfoodbank.Item join(dalfoodbank.Category) using(CategoryId) where ItemId=? order by ItemId',
  createProduct:
    'INSERT INTO `dalfoodbank`.`Item` (`ItemName`,`ItemDescription`,`CategoryId`,`AvailableQuantity`,`ItemLimit`) VALUES (?,?,?,?,?);',
  updateProduct:
    'UPDATE `dalfoodbank`.`Item` SET `ItemName` = ?,`ItemDescription` = ?,`CategoryId` = ?,`AvailableQuantity` = ?,`ItemLimit` = ? WHERE `ItemId` = ?;',

  getCategories: 'SELECT * FROM dalfoodbank.Category',
};
