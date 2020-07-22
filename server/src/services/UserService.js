/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Service layer for the user resource communicating with the database and transforming the response for front-end
 */
const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');
const nodemailer = require('nodemailer');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function UserService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
UserService.prototype.authenticate = async function authenticate(data) {
  const signInQuery = mysql.format(queries.signIn, data.userId);
  console.log(`The Query for finding user entry - ${signInQuery}`);
  try {
    let result = await database.query(signInQuery);

    if (result.length === 0) {
      return {
        success: false,
        statusCode: 404,
        message: 'user not found',
      };
    }
    if (result.length === 1) {
      if (result[0].password === data.password) {
        return {
          success: true,
          statusCode: 200,
        };
      } else {
        return {
          success: false,
          statusCode: 400,
          message: 'incorrect password',
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

UserService.prototype.createUser = async function createUser(data) {
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  const plain_password = data.password;
  const cipher_password = bcrypt.hashSync(plain_password, saltRounds);
  const createUserquery = mysql.format(queries.createUser, [
    data.bannerId,
    data.firstName,
    data.lastName,
    cipher_password,
    data.email,
    data.role,
  ]);
  console.log(`The Query for creating a User entry - ${createUserquery}`);
  try {
    let items = await database.query(createUserquery);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.googlemail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'advsdc12@gmail.com', // generated ethereal user
        pass: 'Dal@2020', // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // setup email data with unicode symbols
    let mailOptions = {
      from: 'SAMKIT SHAH', // sender address
      to: data.email, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: `<div style="background-color: #F5F7FA; padding: 50px; min-width: 360px;">
    <div style="max-width: 600px; margin: 0 auto; padding: 60px 75px 50px; background-color: white;">
      <img style="display: block; max-width: 200px; height: auto;"
        src="./../../../src/assets/media/logo.JPG"
        alt="FoodBank Logo" />
      <h1 style="padding: 50px 0 15px; font-family: Arial, sans-serif; font-size: 36px; color: #343B4E;">Welcome to
        Foodbank</h1>
      <p style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; color: #52556B; line-height: 1.5">
        Thank you for signing up to be a member of the DSU Foodbank.</p>
      <p style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; color: #52556B; line-height: 1.5">
          We are aware that food insecurity is a problem in the student community. Sometimes money doesn't come in, loans get delayed, or you've got other expenses that suddenly appear. 
          Don't worry, whether you need long term assistance or just a few meals to get by, please come visit us. 
      </p>
      <p style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; color: #52556B; line-height: 1.5">
        You are now able to login to Foodbank and access all our resources.</p>
      <p style="padding: 25px 0 40px;">
        <a style="padding: 20px 25px; background-color: #46A069; color: #FFFFFF; text-decoration: none; text-transform: uppercase; font-family: Arial, sans-serif; font-size: 20px;"
          href="https://dsu-food-bank.herokuapp.com/login" target="_blank">CLICK HERE TO LOGIN</a>
      </p>
      <p style="padding-bottom: 15px; font-family: Arial, sans-serif; font-size: 18px; color: #52556B; line-height: 1.5">
        If you have any problem and need any help then you can call us on (902) 494‑2140.
        For more information email dsufoodbank@dal.ca
      </p>
      <p style="padding-bottom: 0; font-family: Arial, sans-serif; font-size: 18px; color: #52556B; line-height: 1.5">
        Thank you,<br />The Team of DSU FoodBank</p>
    </div>
    <p style="padding: 50px 0 0; text-align: center; font-family: Arial, sans-serif; font-size: 12px; color: #838A9F">
      Copyright&copy; 2020 Dalhousie Student Union
      6136 University Ave
      PO Box 15000
      Halifax NS  B3H 4R2</p>
    <p style="padding: 0; text-align: center; font-family: Arial, sans-serif; font-size: 12px;">
      <a href="https://www.facebook.com/dsufoodbank/" style="color: #52556B; text-decoration: none;">Facebook</a>
      &nbsp;|&nbsp;
      <a href="https://www.instagram.com/dsufoodbank/" style="color: #52556B; text-decoration: none;">Instagram</a>
    </p>
  </div>`,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('error' + error);
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', { msg: 'Email has been sent' });
    });
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    if (error.errno === 1062) {
      return {
        success: false,
        statusCode: 400,
        message: 'User already exists.',
        error,
      };
    } else {
      return {
        success: false,
        statusCode: 500,
        message: 'Please try after some time.',
        error,
      };
    }
  }
};

UserService.prototype.getRoles = async function getRoles() {
  const getRolesquery = queries.getRoles;
  console.log(`The Query for returning all roles information - ${getRolesquery}`);
  try {
    let items = await database.query(getRolesquery);
    return {
      success: true,
      statusCode: 200,
      items,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};
module.exports = UserService;
