import express from "express";
import { signup,login, Logout } from "../Controllers/auth.controller.js";


const router =express.Router();


router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",Logout)



export default router;
