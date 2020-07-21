/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling category resource and delegating business work to the service layer
 * @param {instance of a CategoryService class} service
 */
function CategoryController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
}
CategoryController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};

module.exports = CategoryController;
