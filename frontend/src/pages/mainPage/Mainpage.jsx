import React from 'react'
import Namecolumn from './NameColumn/NameColumn'
import Chatsection from './mainChatSetion/Chatsection'

const Mainpage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#080c14] to-[#10172a] flex overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="flex w-full h-screen relative z-10">
        {/* Left sidebar with user names */}
        <div className="flex-shrink-0 w-2xs md:w-xs border-r border-blue-900/20">
          <Namecolumn />
        </div>
        
        {/* Right chat section - takes remaining space */}
        <div className="flex-1 flex overflow-hidden">
          <Chatsection />
        </div>
      </div>
    </div>
  )
}

export default Mainpage