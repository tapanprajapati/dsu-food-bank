/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Generalized schema to validate requests related to Product APIs
 */
const { Joi } = require('express-validation');

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  categoryId: Joi.number().required(),
  availableQty: Joi.number().required(),
  limit: Joi.number().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  categoryId: Joi.number().required(),
  availableQty: Joi.number().required(),
  limit: Joi.number().required(),
});

module.exports = {
  //POST: /api/products/
  createProduct: {
    body: createProductSchema,
  },

  //PUT: /api/products
  updateProduct: {
    body: updateProductSchema,
    params: Joi.object({ id: Joi.number().required() }),
  },
};
