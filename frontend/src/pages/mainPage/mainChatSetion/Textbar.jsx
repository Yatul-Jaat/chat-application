import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { FaPaperclip, FaSmile } from "react-icons/fa";
import { BsMic, BsSend } from "react-icons/bs";
import useSendMessage from "../../../hooks/useSendMessages";
import useConversation from "../../../zustand/useConversation";

const Textbar = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage}=useSendMessage()
  const {setMessages,messages}=useConversation()
  

  const handleKeyPress = async(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if(!message) return 
      await setMessages([...messages,message])
      await sendMessage(message)
      setMessage("")
    }
  };

  return (
    <form  className="px-2 pb-2 pt-2">
      <div className="bg-[#131b2d] border border-blue-500/20 rounded-2xl shadow-md overflow-hidden">
        <div className="flex items-center gap-2 p-1 pl-3">
          {/* Attachment button */}
          {/* <button className="text-gray-400 hover:text-blue-400 p-3 rounded-full hover:bg-white/5 transition-all">
            <FaPaperclip className="w-5 h-5" />
          </button> */}
          
          {/* Input field */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter the message..."
              className="w-full bg-transparent text-gray-100 outline-none resize-none py-3 px-2 max-h-24"
              rows={1}
              style={{ 
                minHeight: "40px",
                height: "auto"
              }}
            />
          </div>
          
          {/* Emoji button */}
          {/* <button className="text-gray-400 hover:text-blue-400 p-3 rounded-full hover:bg-white/5 transition-all">
            <FaSmile className="w-5 h-5" />
          </button> */}
          
          {/* Voice button */}
          {/* <button className="text-gray-400 hover:text-blue-400 p-3 rounded-full hover:bg-white/5 transition-all">
            <BsMic className="w-5 h-5" />
          </button>
           */}
          {/* Send button */}
          <button 
            onClick={()=>{handleKeyPress}}
            className={`flex items-center justify-center p-3 m-1 rounded-xl transition-all ${
              message.trim() 
                ? "bg-blue-500 hover:bg-blue-600 text-white" 
                : "bg-blue-500/30 text-blue-300"
            }`}
          >
            {loading?( <div className="ml-3 w-5 h-5 rounded-full bg-gray-700 animate-pulse"></div>):(<IoSend className="w-5 h-5" />)}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Textbar;