import React from 'react'
import Searchbox from './Searchbox'
import Username from './Username'
import { BiLogOut } from "react-icons/bi"
import useLogout from '../../../hooks/useLogout.js'

const Namecolumn = () => {


  const {logout}= useLogout();

  const handleLogout = () => {
    logout()
    console.log("hello moto")
  }
  
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-b from-[#080c14] to-[#10172a] border-r border-blue-500/10 shadow-lg">
      <div className="p-4 border-b border-blue-500/10">
        <h2 className="text-blue-400 font-bold text-xl mb-1">Vartalap</h2>
        <p className="text-gray-400 text-xs">Connect with your community</p>
      </div>
      
      <div className="flex-1 flex flex-col gap-4 p-3 overflow-auto">
        <Searchbox />
        <Username />
      </div>
      
      <form onSubmit={handleLogout} className="mt-auto p-4 border-t border-blue-500/10">
        <button type='submit'>
        <BiLogOut className="w-6 h-6 text-white cursor-pointer hover:text-blue-400 transition-colors"  />
        </button>
      </form>
    </div>
  )
}

export default Namecolumn