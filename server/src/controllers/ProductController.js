const { debug } = require('console');

/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling product resource and delegating business work to the service layer
 * @param {instance of a ProductService class} service
 */
function ProductController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.getSpecific = this.getSpecific.bind(this);
  this.create = this.create.bind(this);
  this.update = this.update.bind(this);
}
ProductController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};

ProductController.prototype.create = async function create(req, res) {
  let response = await this.service.create(req.body);
  res.status(response.statusCode).send(response);
};

ProductController.prototype.update = async function update(req, res) {
  let response = await this.service.update(req.body, parseInt(req.params.id));
  res.status(response.statusCode).send(response);
};
module.exports = ProductController;
