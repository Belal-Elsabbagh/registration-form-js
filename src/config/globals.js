import mongoose from "mongoose";

/**
 * URI that connects to the database
*/
const DATABASE_CONNECTION_URI = 'mongodb://localhost:27017/registration-data'
mongoose.connect(DATABASE_CONNECTION_URI);
databaseConnection.on('error', console.log.bind(console, "connection error"));
databaseConnection.once('open', function (callback) {
   console.log("connection succeeded");
});
export let databaseConnection = mongoose.connection

export const PORT_NUMBER = 3000