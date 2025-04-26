import express from "express"
import connectionToDB from "./db/connectionToDB.js";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import userRouter from "./routes/user.routes.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config()



app.use(cookieParser());


app.use(express.json());
app.use("/api/auth",authRouter)
app.use("/api/message",messageRouter)
app.use("/api/user",userRouter)


server.listen(3000,()=>{
    console.log("server is up...")
    connectionToDB()
})