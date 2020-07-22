function OrderController(service) {
  this.service = service;
  this.getAll = this.getAll.bind(this);
  this.getByOrderId = this.getByOrderId.bind(this);
  this.updateOrderStatusById = this.updateOrderStatusById.bind(this);
}
OrderController.prototype.getAll = async function getAll(req, res) {
  let response = await this.service.getAll();
  res.status(response.statusCode).send(response);
};

OrderController.prototype.getByOrderId = async function getByOrderId(req, res) {
  let response = await this.service.getByOrderId(req.params);
  res.status(response.statusCode).send(response);
};

OrderController.prototype.updateOrderStatusById = async function updateOrderStatusById(req, res) {
  let response = await this.service.updateOrderStatusById(req.params, req.body);
  res.status(response.statusCode).send(response);
};
module.exports = OrderController;
