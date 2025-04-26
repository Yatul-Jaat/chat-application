import express from "express"
import { sendMessage,getMessages } from "../Controllers/message.Controller.js";
import ProtectRoute from "../middleware/ProtectRoutes.js";

const router = express.Router();

router.get("/:id", ProtectRoute, getMessages);
router.post("/send/:id", ProtectRoute, sendMessage);


export default router