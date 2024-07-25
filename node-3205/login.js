const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");
const session = require("express-session");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
let accounts = JSON.parse(fs.readFileSync("./database/db.json"));
// 	(error, data) => {
// 		if (error) {
// 			console.log(error)
// 			return
// 		}
// 		console.log(JSON.parse(data))
// 	}
// )



// http://localhost:3000/
app.get("/", function (request, response) {
  for (const account of accounts) {
    console.log(account);
  }
  response.sendFile(path.join(__dirname + "/login.html"));
});

// http://localhost:3000/auth
app.post("/auth", function (request, response, next) {
  console.log("auth working");
  let password = request.body.password;
  let email = request.body.email;
  console.log(password, email);
  for (const account of accounts) {
    if (email == account.email && password == account.number) {
      request.session.loggedin = true;
      request.session.email = email;
      request.session.password = password;
      console.log("verification true");
      console.log(account);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(account));
      //   response.redirect("/form");
    }
  }
  response.end();
});

// http://localhost:3000/form
app.get("/form", function (request, response) {
  // If the user is loggedin
  //   if (request.session.loggedin) {
  // Output username
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(
    JSON.stringify({
      email: request.session.email,
      number: request.session.password,
    })
  );
  // response.send(
  //   JSON.stringify({
  //     email: request.session.email,
  //     number: request.session.password,
  //   })
  // );
  //   }
  response.end();
});

const server = app.listen(3500);

server.setTimeout(5000);
