import mongoose from "mongoose"




const connectionToDB=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/chat-final')
  .then(() => console.log('Connected to DB!'));
}

export default connectionToDB