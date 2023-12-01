import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div className='max-w-full w-11/12 mx-auto'>
    <div className='lg:pt-32 pt-[300px]'>
      <div className='text-4xl flex items-center gap-2 justify-center text-center text-[#011321] font-semibold'>
        <h1>Qualifications</h1>
        <MdCastForEducation  className='text-[#011321]'/>
      </div>
      <div className='mt-10 flex lg:flex-row flex-col gap-7 justify-between pb-9'>
        <div className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Btech</span></p>
          <p className='text-xl text-[#294052] font-medium'>
          My specialization in my graduation program is Electronics and Communication Engineering in which I have secured 8.68 cgpa out of 10.
          </p>
          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>8.68 cgpa</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'> UIET CSJM University Kanpur</span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#c]'>2019-2023</span><SlCalender /></p>
        </div>
        <div  className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Intermediate</span></p>
          <p className='text-xl text-[#294052] font-medium'>
         I have done my pre-university education program in Physics, Chemistry and Maths in which I have secured 80.4%.
          </p>
          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>80.4%</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'> Kanpur Intermediate Edu. Center</span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#294052]'>2018-2019</span><SlCalender /></p>
        </div>
        <div  className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Highschool</span></p>
          <p className='text-xl text-[#294052] font-medium'>
          I have done my SSC education in Physics, Chemistry and Maths in which I have secured 86.83%.
          </p>
          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>86.83%</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'> Modern Super National IC</span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#294052]'>2016-2017</span><SlCalender /></p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Education
