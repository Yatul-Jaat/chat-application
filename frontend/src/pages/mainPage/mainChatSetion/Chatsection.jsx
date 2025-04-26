import React, { useState } from 'react';
import Namebar from "./Namebar";
import Chatpart from './Chatpart';
import Textbar from './Textbar';
import Chatnoselection from './Chatnoselection';
import useConversation from '../../../zustand/useConversation';

const Chatsection = () => {
  const {selectedConversation}= useConversation()
  return (
    <>
      {selectedConversation ? (
        // Regular chat interface when a chat is selected
        <div className="flex-1 h-screen bg-gradient-to-b from-[#0c1425] to-[#151f32] ">
          <div className="flex flex-col h-full  overflow-hidden border border-blue-500/20 bg-[#080c14]/80 backdrop-blur-sm shadow-xl">
            {/* Header section */}
            <div className="relative">
              <Namebar selectedConversation={selectedConversation}  />
            </div>
            
            <div className="flex-1 overflow-auto overflow-x-hidden relative">
              <Chatpart  />
            </div>
            
            {/* Input section with subtle glow effect */}
            <div className="relative">
              <Textbar  />
            </div>
          </div>
        </div>
      ) : (
        // No chat selected view
        <Chatnoselection  />
      )}
    </>
  );
};

export default Chatsection;