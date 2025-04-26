import React from "react";
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/authContext";
import { extractTime } from "../../../utils/extractTime.js";
const Chat = ({ message }) => {
  console.log(message);

  const { authuser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formatedTime = extractTime(message.createdAt);
  const isOwn = message.senderId === authuser._id;

  return (
    <div className={` pb-1  ${isOwn ? "" : "flex justify-start"}`}>
      <div
        className={`flex gap-3 my-3 items-end ${
          isOwn ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex-shrink-0 ${
            isOwn
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-blue-400 to-indigo-500"
          } flex items-center justify-center shadow-md`}
        >
          <span className="text-white text-xs font-medium uppercase">
            {isOwn
              ? authuser.Name.slice(0, 2)
              : selectedConversation.Name.slice(0, 2)}
          </span>
        </div>

        {/* Message bubble */}
        <div className="relative">
          <p
            className={`relative max-w-xs text-wrap rounded-2xl px-4 py-2 shadow-sm ${
              isOwn
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "bg-[#1a2235] text-gray-100 border border-gray-700/50"
            }`}
          >
            {message.message}
          </p>

          {/* Message timestamp */}
          <div
            className={`text-[10px]  mt-1 absolute ${
              isOwn ? "text-blue-200 right-2 " : "text-gray-400 left-2"
            } text-right`}
          >
            {formatedTime}
          </div>

          {/* Read status indicator (only for own messages) */}
          {/* {isOwn && (
          <div className="text-[10px] text-blue-200 text-right flex items-center justify-end gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default Chat;

// <div className="flex items-start gap-2 justify-end">
//   <div className="relative max-w-xs rounded-2xl px-4 py-2 shadow-sm bg-gradient-to-r from-blue-500 to-blue-600">
//     <div className="h-4 w-28 bg-blue-400/40 rounded animate-pulse"></div>
//     <div className="h-4 w-36 bg-blue-400/40 rounded animate-pulse mt-2"></div>
//     <div className="text-right mt-1">
//       <div className="h-2 w-10 bg-blue-400/40 rounded animate-pulse inline-block"></div>
//     </div>
//   </div>
//   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
//     <span className="text-white text-xs font-medium">Y</span>
//   </div>
//  </div>
