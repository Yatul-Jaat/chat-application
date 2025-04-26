import React from 'react';
import { motion } from 'framer-motion';
import useConversation from '../../../zustand/useConversation';
import {useSocketContext} from "../../../context/SocketContext"

const User = ({ conversation}) => {
  const {selectedConversation,setSelectedConversation}=useConversation()
  const isSelected=selectedConversation?._id==conversation._id;

  const {onlineUsers} = useSocketContext();

  const isOnline=onlineUsers.includes(conversation._id)
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 w-full rounded-xl px-4 py-3 cursor-pointer transition-all duration-200
        ${isSelected
          ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10' 
          : 'bg-[#10172a]/40 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-indigo-500/10 border border-white/5 hover:border-blue-500/20'
        }`}
      onClick={()=>{setSelectedConversation(conversation)}}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium shadow-lg uppercase">
          {conversation.Name.slice(0,2)}
        </div>
        
        {/* Status indicator with glow effect */}
        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full  border-2 border-[#10172a]  shadow-lg ${isOnline ? 'bg-green-500/30' : 'bg-gray-700'}`}></div>
      </div>
      
      <div className="flex flex-col flex-grow justify-center">
        <div className="flex justify-between items-center">
          <p className="font-medium text-white">{conversation.Name}</p>
          
          {/* Unread message indicator */}
          {/* {hasUnread && (
            <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md shadow-blue-500/30">
              1
            </span>
          )} */}
        </div>
        
        <p className="text-xs text-gray-400">{conversation.username}</p>
      </div>
    </motion.div>
  );
};

export default User;