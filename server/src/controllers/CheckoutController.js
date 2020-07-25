/**
 * @author Samkit Shah <samkit@dal.ca>
 */

function checkoutController(service) {
  this.service = service;
  this.createOrder = this.createOrder.bind(this);
}
checkoutController.prototype.createOrder = async function createOrder(
  req,
  res
) {
  let response = await this.service.createOrder(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = checkoutController;
