/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * @author Asmita Chaudhari <Asmita.Chaudhari@dal.ca>
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
  deleteUserRole:
    'update User SET RoleId = 3 where BannerId = ? and RoleId = ?',
  addUserRole: 'update User SET RoleId = ? where FirstName = ?',
  getOrders:
    "SELECT orderId,BannerId,DATE_FORMAT(Order.OrderDate,'%M %d %Y') as 'OrderDate',DATE_FORMAT(Order.DeliveredDate,'%M %d %Y') as 'DeliveredDate',UCASE(Status) as 'Status',DATE_FORMAT(Order.PickUpSlot,'%M %d %Y, %h:%m:%S %p') as PickUpSlot FROM dalfoodbank.Order;", //need to update with bannerId in where clause
  getOrder:
    'SELECT Order.OrderId,Item.ItemName,OrderDetails.ItemQuantity,Order.OrderDate,Order.DeliveredDate,Order.status,Order.PickUpSlot,Category.CategoryName,OrderDetails.ItemId FROM dalfoodbank.OrderDetails,dalfoodbank.Order,dalfoodbank.Item,dalfoodbank.Category where Order.OrderId=OrderDetails.OrderId and OrderDetails.ItemId=Item.ItemId and Item.CategoryId=Category.CategoryId and Order.OrderId=?;',
  deletecart: 'DELETE FROM dalfoodbank.Cart where BannerId=?',
  orderStatusUpdate:
    'UPDATE `dalfoodbank`.`Order` SET `Status` = ? WHERE `OrderId` = ?;',
  setOrderDeliveredDate:
    'UPDATE `dalfoodbank`.`Order` SET `DeliveredDate` = current_date() WHERE `OrderId` = ?;',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  createUser:
    'INSERT INTO dalfoodbank.User(BannerId,FirstName,LastName,Password,Email,RoleId) VALUES (?,?,?,?,?,?)',
  getRoles: 'SELECT * FROM dalfoodbank.Role',
  createProduct:
    'INSERT INTO `dalfoodbank`.`Item` (`ItemName`,`ItemDescription`,`CategoryId`,`AvailableQuantity`,`ItemLimit`) VALUES (?,?,?,?,?);',
  updateProduct:
    'UPDATE `dalfoodbank`.`Item` SET `ItemName` = ?,`ItemDescription` = ?,`CategoryId` = ?,`AvailableQuantity` = ?,`ItemLimit` = ? WHERE `ItemId` = ?;',
  createOrder: `INSERT INTO dalfoodbank.Order (BannerId,OrderDate,Status,PickUpSlot) VALUES (?,?,?,?)`,
  createOrderdetails: `INSERT INTO dalfoodbank.OrderDetails (OrderId,ItemId,ItemQuantity) VALUES (?,?,?)`,
  fetchOrderId: `SELECT OrderId FROM dalfoodbank.Order where BannerId= ? ORDER BY OrderId DESC LIMIT 1;`,
  getProducts: `SELECT * 
    FROM 
    dalfoodbank.Item as I
      LEFT JOIN 
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    ORDER BY I.ItemId`,
  addCategory:
    'INSERT INTO `dalfoodbank`.`Category` (`CategoryName`) VALUES (?);',
  updateCategory:
    'UPDATE `dalfoodbank`.`Category` SET `CategoryName` = ? WHERE `CategoryId` = ?;',
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
    WHERE I.CategoryId IN (`,
  getProductsByNameAndCategory: `SELECT *
    FROM
    dalfoodbank.Item as I
      LEFT JOIN
    dalfoodbank.Category as C
    ON I.CategoryId = C.CategoryId
    WHERE ItemName LIKE ? AND I.CategoryId IN (`,
  deleteProduct: `DELETE FROM dalfoodbank.Item WHERE ItemId = ?;`,
  //signIn: '',
  getRole: 'SELECT * FROM dalfoodbank.Role',
  getStudent: 'select * from User where RoleId = 3',
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
  postContactUsMessage: `insert into ContactUs (BannerId, FirstName, Email, Message) values(?, ?, ?, ?)`,
};
