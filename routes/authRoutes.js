import express from "express";
import { registerController, loginController, textController } from "../controller/authController.js";
import { requireSignin, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router()
//register
router.post('/register', registerController)

//login
router.post('/login', loginController)

//test
router.get('/test', requireSignin, isAdmin, textController)

export default router
 