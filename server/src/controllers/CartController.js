/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling cart resource and delegating business work to the service layer
 * @param {instance of a CartService class} service
 */
function CartController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.addProductToCart = this.addProductToCart.bind(this);
  this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
}
CartController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};
CartController.prototype.addProductToCart = async function addProductToCart(req, res) {
  let response = await this.service.addProductToCart(req.body);
  res.status(response.statusCode).send(response);
};
CartController.prototype.deleteProductFromCart = async function deleteProductFromCart(req, res) {
  let response = await this.service.deleteProductFromCart(req.params);
  res.status(response.statusCode).send(response);
};

module.exports = CartController;
