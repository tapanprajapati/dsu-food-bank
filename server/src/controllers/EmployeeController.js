/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling Employee resource and delegating business work to the service layer
 * @param {instance of a EmployeeService class} service
 */
function EmployeeController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.deleteUserRole = this.deleteUserRole.bind(this);
  this.addUserRole = this.addUserRole.bind(this);
}
EmployeeController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};

EmployeeController.prototype.deleteUserRole = async function deleteUserRole(req, res) {
  let response = await this.service.deleteUserRole(req.params);
  res.status(response.statusCode).send(response);
};

EmployeeController.prototype.addUserRole = async function addUserRole(req, res) {
  let response = await this.service.addUserRole(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = EmployeeController;
