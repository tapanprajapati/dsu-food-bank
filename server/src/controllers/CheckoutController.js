/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling user resource and delegating business work to the service layer
 * @param {instance of a CheckoutService class} service
 */
function checkoutController(service) {
  this.service = service;
  this.createOrder = this.createOrder.bind(this);
}
checkoutController.prototype.createOrder = async function createOrder(req, res) {
  let response = await this.service.createOrder(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = checkoutController;
