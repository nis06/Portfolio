import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlinePerson3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdMobileScreenShare } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='w-11/12 max-w-full h-screen  flex flex-col items-center justify-center mx-auto  text-xl font-semibold gap-3 text-[#0e2a40] overflow-y-hidden lg:pt-0 pt-[200px]'>
            <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-1'>
        <MdOutlinePerson3 className='text-[#e32047]' />
          <p>Name: <span>Niharika Dubey</span></p>
        </div>
        <div className='flex items-center gap-1'>
        <MdEmail className='text-[#e62709]'/>
          <p>Email: <span>niharika6sep@gmail.com</span></p>
        </div>
        <div className='flex gap-1 items-center'>
        <MdMobileScreenShare className='text-[#c309ed]'/>
          <p>Phone No. : 6307824373</p>
        </div>
        <div className='flex gap-1 items-center'>
        <CiLocationArrow1 className='text-[#098aed]' />
      <p className='flex items-center gap-2'>
        Linkedin :<span><Link to='https://www.linkedin.com/in/niharika-dubey-30954322b/'>Tap here </Link></span>
        <FaArrowRight  />
      </p>
      
      </div>
      <div className='flex items-center gap-1'>
        <FaGithub className='text-black'/>
          <p className='flex items-center gap-2'>Github: <span><Link to='https://github.com/nis06'>Let's see</Link></span>
          <FaArrowRight  /></p>
        </div>
      </div>
      <div className='rounded-sm bg-[#011321]  text-white py-2 px-12 hover:scale-110 transition-all duration-200'>
            <button><Link to='https://drive.google.com/file/d/1JEu3nJEcjN2plv4CMV0O-OBxS5yUUYTj/view?usp=sharing'>Download Resume</Link></button>
        </div>
        <div className='flex gap-20 mt-3 text-4xl  justify-between '>
        <Link to='https://www.linkedin.com/in/niharika-dubey-30954322b/'>
            <FaLinkedin  className='text-[#0961ed] transition-all duration-200 hover:scale-110'/>
        </Link>
        <Link to='https://twitter.com/Niharik78815912?t=GwpE7aKVXhJtw8j9MLxdcQ&s=09'>
            <FaTwitter  className='text-[#0948ad] transition-all duration-200 hover:scale-110'/>
        </Link>
        <Link to='https://www.instagram.com/niharika_06sep/?next=%2F'>
        <FaInstagramSquare  className='text-[#f0294d] transition-all duration-200 hover:scale-110'/>
        </Link>
        
        </div>
        
    </div>
  )
}

export default Contact


