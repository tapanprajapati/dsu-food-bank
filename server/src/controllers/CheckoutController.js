/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Controller class handling user resource and delegating business work to the service layer
 * @param {instance of a CheckoutService class} service
 */
function checkoutController(service) {
  this.service = service;
}

module.exports = checkoutController;
