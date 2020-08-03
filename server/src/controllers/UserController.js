/**
 * @author Samkit Shah <samkit@dal.ca>
 * Controller class handling user resource and delegating business work to the service layer
 * @param {instance of a UserService class} service
 */
function UserController(service) {
  this.service = service;
  this.authenticate = this.authenticate.bind(this);
  this.createUser = this.createUser.bind(this);
  this.getRoles = this.getRoles.bind(this);
  this.getUser = this.getUser.bind(this);
}

UserController.prototype.authenticate = async function authenticate(
  req,
  res,
  next
) {
  if (!req.body) {
    return next();
  }
  const response = await this.service.authenticate(req.body);
  res.authenticate = response;
  return next();
};

// This method will call the service to create user and pass the user object in request body.
UserController.prototype.createUser = async function createUser(req, res) {
  let response = await this.service.createUser(req.body);
  res.status(response.statusCode).send(response);
};

// This method will call the service to get the roles from the database and return response.
UserController.prototype.getRoles = async function getRoles(req, res) {
  let response = await this.service.getRoles();
  res.status(response.statusCode).send(response);
};

UserController.prototype.getUser = async function getUser(req, res) {
  let response = await this.service.getUser(req.params.bannerId);
  res.status(response.statusCode).send(response);
};

module.exports = UserController;
