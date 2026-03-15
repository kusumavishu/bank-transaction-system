const express = require("express");
const userController = require("./user.controller");
const zodValidator = require("../../middlewares/zodValidator.middleware");
const { userValidSchema } = require("./user.validation");

const router = express.Router();

router.post("/", zodValidator(userValidSchema), userController.createUser);

router.get("/", zodValidator(userValidSchema), userController.getUsers);

// router.get("/:id", userController.getUserById);

module.exports = router;
