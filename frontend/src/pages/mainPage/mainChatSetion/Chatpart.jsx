import React, { useRef, useEffect } from "react";
import Chat from "./Chat";
import useGetMessages from "../../../hooks/useGetMessages";

const Chatpart = () => {
  const messagesEndRef = useRef(null);
  const { messages, loading } = useGetMessages();
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Add messages as a dependency so it runs whenever messages change
  
  console.log(messages);

  return (
    <div
      className="flex-1 overflow-y-auto px-4 py-6 space-y-4 
      scrollbar scrollbar-w-2 scrollbar-thumb-blue-400 hover:scrollbar-thumb-blue-500 
      scrollbar-track-blue-900/20 scrollbar-thumb-rounded-full"
    >
      <div className="flex flex-col ">
        {/* Date separator */}
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center my-4">
          <div className=" text-white text-xs px-3 py-1 rounded-full">
            <p>Send a Message to start the conversation</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-medium">U</span>
            </div>
            <div className="relative w-xs rounded-2xl px-4 py-2 shadow-sm bg-[#1a2235] border border-gray-700/50">
              <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-700 rounded animate-pulse mt-2"></div>
              <div className="text-right mt-1">
                <div className="h-2 w-10 bg-gray-700 rounded animate-pulse inline-block"></div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 justify-end">
            <div className="relative w-xs rounded-2xl px-4 py-2 shadow-sm bg-gradient-to-r from-blue-500 to-blue-600">
              <div className="h-4 w-full bg-blue-400/40 rounded animate-pulse"></div>
              <div className="h-4 w-36 bg-blue-400/40 rounded animate-pulse mt-2"></div>
              <div className="text-right mt-1">
                <div className="h-2 w-10 bg-blue-400/40 rounded animate-pulse inline-block"></div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-medium">Y</span>
            </div>
          </div>
        </div>
      )}

      {
        <ul>
          {
            !loading && messages.length>0 && (
              messages.map((message, index) => (
                <Chat key={index} message={message} />  
              ))
            )
          }
        </ul>
      }
      </div>

      {/* This is our anchor for auto-scrolling */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chatpart;