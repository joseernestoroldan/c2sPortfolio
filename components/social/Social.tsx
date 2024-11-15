import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

const Social = () => {
  return (
    <div className='w-full flex flex-row justify-center items-center space-x-4 p-4'>
        <FaWhatsapp className='text-xl opacity-75'/>
        <FaInstagram className='text-xl opacity-75'/>
        <FaYoutube className='text-xl opacity-75'/>
        <FaGithub className='text-xl opacity-75'/>
        <FaWordpress className='text-xl opacity-75'/>
    </div>
  )
}

export default Social