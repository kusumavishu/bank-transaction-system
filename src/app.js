const express = require("express");

const app = express();

app.use(express.json());

/**
 * - Routes required
 */

const userRouter = require("./modules/users/user.routes");

app.use("/api/user", userRouter);

module.exports = app;
