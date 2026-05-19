const express = require("express");
const router = express.Router();

const authController = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
    "/register",
    authMiddleware.RegisterValidation,
    authController.Register,
);
router.post("/login", authController.Login);
router.post("/logout", authController.Logout);
router.get("/me", authController.Me);

module.exports = router;
