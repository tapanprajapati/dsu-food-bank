/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Centralized queries required for various endpoints
 */
module.exports = {
  getProducts: 'SELECT * FROM dalfoodbank.Item',
  getCategories: 'SELECT * FROM dalfoodbank.Category',
  getOrders:
    "SELECT orderId,BannerId,DATE_FORMAT(Order.OrderDate,'%M %d %Y') as 'OrderDate',DATE_FORMAT(Order.DeliveredDate,'%M %d %Y') as 'DeliveredDate',UCASE(Status) as 'Status',PickUpSlot FROM dalfoodbank.Order;", //need to update with bannerId in where clause
  getOrder:
    'SELECT Order.OrderId,Item.ItemName,OrderDetails.ItemQuantity,Order.OrderDate,Order.DeliveredDate,Order.status,Order.PickUpSlot FROM dalfoodbank.OrderDetails,dalfoodbank.Order,dalfoodbank.Item where Order.OrderId=OrderDetails.OrderId and OrderDetails.ItemId=Item.ItemId and Order.OrderId=?;',
};
