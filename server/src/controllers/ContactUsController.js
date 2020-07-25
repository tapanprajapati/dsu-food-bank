/**
 * @author Asmita Chaudhari <Asmita.Chaudhari@dal.ca>
 *
 * Controller class handling Contact Us resource and delegating business work to the service layer
 * @param {instance of a ContactUsService class} service
 *
 */

function ContactUsController(service) {
  this.service = service;
  this.postContactUsMessage = this.postContactUsMessage.bind(this);
}
ContactUsController.prototype.postContactUsMessage = async function postContactUsMessage(
  req,
  res
) {
  let response = await this.service.postContactUsMessage(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = ContactUsController;
