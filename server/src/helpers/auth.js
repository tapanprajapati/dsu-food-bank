/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 */
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { jwtSecret, jwtDuration, jwtAlgorithm } = require('app-data/tokenConfig');

const generateJwtToken = (userPayload, secret, expiryDuration) => {
  return jwt.sign(userPayload, secret, { expiresIn: expiryDuration });
};

const sendJwtToken = (req, res) => {
  const statusCode = res.authenticate.statusCode;
  let token;
  if (statusCode === 200) {
    token = generateJwtToken({ id: req.body.userId }, jwtSecret, jwtDuration);
  }

  res.status(statusCode).send({
    token,
    authenticate: res.authenticate,
  });
};

const authenticateRoute = expressJwt({
  secret: jwtSecret,
  algorithms: [jwtAlgorithm],
});

module.exports = { sendJwtToken, authenticateRoute };
