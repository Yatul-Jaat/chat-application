import React from 'react';

const Namebar = ({selectedConversation}) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-3 sm:p-4 sm:py-2 rounded-b-lg border border-blue-400/30 shadow-lg flex items-center gap-3 sm:gap-5 w-full">
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg ring-2 ring-blue-300/20">
          <span className="text-white  text-base sm:text-lg uppercase">{selectedConversation.Name.slice(0,2)}</span>
        </div>
      </div>
      
      <div className="flex flex-col min-w-0 flex-1 max-w-full pr-2">
        <p className="text-white font-medium text-base sm:text-lg truncate overflow-ellipsis">{selectedConversation.Name}</p>
        <p className="text-blue-300 text-xs font-medium truncate overflow-ellipsis">@{selectedConversation.username}</p>
      </div>
    </div>
  );
};

export default Namebar; 