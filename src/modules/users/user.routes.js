const express = require("express");
const userController = require("./user.controller");
const zodValidator = require("../../middlewares/zodValidator.middleware");
const { userValidSchema } = require("./user.validation");

const router = express.Router();

// router.get("/", userController.getUsers);
router.post(
  "/register",
  zodValidator(userValidSchema),
  userController.createUser
);

// router.get("/:id", userController.getUserById);

module.exports = router;
