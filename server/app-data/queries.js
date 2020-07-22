/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getOrders:
    "SELECT orderId,BannerId,DATE_FORMAT(Order.OrderDate,'%M %d %Y') as 'OrderDate',DATE_FORMAT(Order.DeliveredDate,'%M %d %Y') as 'DeliveredDate',UCASE(Status) as 'Status',DATE_FORMAT(Order.PickUpSlot,'%M %d %Y, %h:%m:%S %p') as PickUpSlot FROM dalfoodbank.Order;", //need to update with bannerId in where clause
  getOrder:
    'SELECT Order.OrderId,Item.ItemName,OrderDetails.ItemQuantity,Order.OrderDate,Order.DeliveredDate,Order.status,Order.PickUpSlot,Category.CategoryName FROM dalfoodbank.OrderDetails,dalfoodbank.Order,dalfoodbank.Item,dalfoodbank.Category where Order.OrderId=OrderDetails.OrderId and OrderDetails.ItemId=Item.ItemId and Item.CategoryId=Category.CategoryId and Order.OrderId=?;',

  orderStatusUpdate: 'UPDATE `dalfoodbank`.`Order` SET `Status` = ? WHERE `OrderId` = ?;',
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
  signIn: '',
};
