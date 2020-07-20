/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling product resource and delegating business work to the service layer
 * @param {instance of a ProductService class} service
 */
function ProductController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.getProductById = this.getProductById.bind(this);
}
ProductController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};
ProductController.prototype.getProductById = async function getProductById(req, res) {
  let response = await this.service.getProductById(req.params.productId);
  res.status(response.statusCode).send(response);
};
module.exports = ProductController;
