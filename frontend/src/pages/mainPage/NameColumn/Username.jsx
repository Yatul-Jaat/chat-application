import React from 'react';
import User from './User';
import useGetConversation from '../../../hooks/useGetConversation';

const Username = () => {


  const {loading,conversations}= useGetConversation()

  return (
    <div className="flex flex-col gap-2 overflow-y-auto pt-2 px-2 pb-4 max-h-[calc(100vh-180px)] custom-scrollbar">
      
      
      {conversations.map((conversation, index) => (
        <User 
          key={conversation._id} 
          conversation={conversation}
        />
      ))}
      {/* <div className="sticky bottom-0 bg-gradient-to-t from-[#080c14] to-transparent h-6 w-full"></div> */}
      
      
    </div>
  );
};

export default Username;