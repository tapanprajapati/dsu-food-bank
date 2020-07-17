/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling user resource and delegating business work to the service layer
 * @param {instance of a UserService class} service
 */
function UserController(service) {
  this.service = service;
  this.authenticate = this.authenticate.bind(this);
}
UserController.prototype.authenticate = async function authenticate(req, res, next) {
  if (!req.body) {
    return next();
  }
  const response = await this.service.authenticate(req.body);
  res.authenticate = response;
  return next();
};

module.exports = UserController;
