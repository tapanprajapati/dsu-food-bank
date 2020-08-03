/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */
const { Joi } = require('express-validation');

module.exports = {
  // POST: /api/authenticate
  authenticate: {
    body: Joi.object({
      bannerId: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
  // GET: /api/user/:bannerId
  getUser: {
    params: Joi.object({
      bannerId: Joi.string().required(),
    }),
  },
};
