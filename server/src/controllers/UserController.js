/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling user resource and delegating business work to the service layer
 * @param {instance of a UserService class} service
 */
function UserController(service) {
  this.service = service;
  this.authenticate = this.authenticate.bind(this);
  this.createUser = this.createUser.bind(this);
  this.getRoles = this.getRoles.bind(this);
}

UserController.prototype.authenticate = async function authenticate(req, res, next) {
  if (!req.body) {
    return next();
  }
  const response = await this.service.authenticate(req.body);
  res.authenticate = response;
  return next();
};

UserController.prototype.createUser = async function createUser(req, res) {
  let response = await this.service.createUser(req.body);
  res.status(response.statusCode).send(response);
};

UserController.prototype.getRoles = async function getRoles(req, res) {
  let response = await this.service.getRoles();
  res.status(response.statusCode).send(response);
};

module.exports = UserController;
