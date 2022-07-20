import { databaseConnection } from "../../config/globals.js";

/**
 * @typedef User
 * @type {object}
 * @property {string} username - user's username.
 * @property {string} email - user's email.
 * @property {string} password - user's password.
 */

/**
 * Registers a new user into the database
 * @param {!User} data The user's data
 */
function registerUserIntoDatabase(data) {
   databaseConnection.collection('users').insertOne(data, function (err, collection) {
      if (err) throw err;
      console.log("Record inserted Successfully");
   });
}

/**
 * Returns a user object from the data in the http request object
 * @param {Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>} request 
 * @returns {!User}
 */
function parseRegistrationDataFromRequest(request) {
   return {
       username: request.body.username,
       email: request.body.email,
       password: request.body.password
   };
}

export const register = registerUserIntoDatabase
export const parseRegistrationData = parseRegistrationDataFromRequest
