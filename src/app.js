import express from "express";
import bodyparser from "body-parser";
import { databaseConnection, PORT_NUMBER } from "./config/globals.js";
import {register, parseRegistrationData} from "./services/registerUser/index.js";

databaseConnection.on('error', console.log.bind(console, "connection error"));
databaseConnection.once('open', function (callback) {
   console.log("connection succeeded");
});

var app = express();

app.use(bodyparser.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({
   extended: true
}));

app.post('/register', function (req, res) {
   let data = parseRegistrationData(req);
   try {
      register(data)
      return res.redirect('success.html')
   } catch (e) {
      return res.redirect('error.html')
   }
})

app.get('/', function (req, res) {
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('index.html');
}).listen(PORT_NUMBER)

console.log("server listening at port 3000");