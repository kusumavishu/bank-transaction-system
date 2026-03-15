const express = require("express");

const app = express();

/**  Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: "secretkey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

/** ROutes */
const userRouter = require("./modules/users/user.routes");
app.use("/api/user", userRouter);

module.exports = app;
