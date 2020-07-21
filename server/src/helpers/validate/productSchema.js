/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Generalized schema to validate requests related to Product APIs
 */
const { Joi } = require('express-validation');

const createOrderSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  categoryId: Joi.number().required(),
  availableQty: Joi.number().required(),
  limit: Joi.number().required(),
});

module.exports = {
  //POST: /api/products/create
  createProduct: {
    body: createOrderSchema,
  },
};
