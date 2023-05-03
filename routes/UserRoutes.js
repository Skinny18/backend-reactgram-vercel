const express = require("express")
const router = express.Router()

const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController")
const authGuard = require("../middlewares/authGuard")
//Middlewares

const validate = require("../middlewares/handleValidation")
const { imageUpload } = require("../middlewares/imageUpload")
const { userCreateValidation, loginValidation, userUpdateValidation } = require("../middlewares/userValidations")

//Routes
router.post("/register", userCreateValidation(), validate, register)
router.get("/profile", authGuard, getCurrentUser)
router.post("/login", loginValidation(), validate, login)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)
router.get("/:id", getUserById)

module.exports = router