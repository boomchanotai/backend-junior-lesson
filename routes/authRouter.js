const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/authController");

authRouter.get("/login", authController.loginController);
authRouter.get("/register", authController.registerController);
authRouter.get("/user/:name", authController.userController);

module.exports = authRouter;
