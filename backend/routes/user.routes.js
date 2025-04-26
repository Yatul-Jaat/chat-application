import express from "express"
import ProtectRoute from "../middleware/ProtectRoutes.js"
import getAllUser from "../Controllers/user.controller.js"


const router=express.Router()

router.get("/",ProtectRoute,getAllUser)

export default router