const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

//firebase service
var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://adminserver-48ef8.firebaseio.com"
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
  });
});

app.post("/login", (req, res) => {
  res.json({ email: req.body.username, password: req.body.password });
});

//define a firebase server
var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

app.post("/trigger", (req, res) => {
  var usersRef = ref.child("users");
  usersRef.set({
    username: {
      username: req.body.username,
      password: req.body.password
    }
  });
  res.json({ result: "success"});
});

// listen for requests
app.listen(1990, () => {
  console.log("Server is listening on port 3000");
});
