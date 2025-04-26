import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import useGetConversation from "../../../hooks/useGetConversation.js";
import useConversation from "../../../zustand/useConversation.js";
import toast from "react-hot-toast";

const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { conversations } = useGetConversation();
  const {setSelectedConversation}=useConversation();
  

  const handleClick = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    if (searchTerm.length < 3)
      return toast.error("Search term must be atleast 3 character long");

    const conversation=conversations.find((c)=> c.username.toLowerCase().includes(searchTerm.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      

    }else{
      toast.error("No such user Found")
    }

    setSearchTerm("");
  };

  return (
    <div className="px-2 py-3">
      <div className="bg-[#131b2d] border border-blue-500/20 rounded-xl shadow-md flex items-center gap-2 px-3 py-2 transition-all focus-within:border-blue-500/50 focus-within:shadow-blue-500/10">
        <CiSearch className="text-blue-400 text-xl flex-shrink-0" />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search user..."
          className="flex-1 bg-transparent text-gray-100 outline-none h-full placeholder-gray-400 text-sm"
        />

        {searchTerm && (
          <button
            onClick={handleClick}
            className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <IoMdSearch className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchbox;
