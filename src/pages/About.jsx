import React from 'react'

import wave from '../images/about/svg.png'
import laptop  from '../images/about/laptop.png'
import { aboutSection, AppText } from '../constants/index'
const About = () => {
  return (
    <div id="aboutme" className=''>
          <img src={wave}  className="w-screen absolute " alt=''/>
        <div className='w-full bg-purple-600 h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
            <img src={laptop}  className="w-[150px] md:w-[300px] mt-[-100px] " 
             alt=''/>
        </div>
            <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'>About <span className='text-blue-200'>Us</span></h1>
            <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>{AppText.aboutMeDescripion} </h1>
        </div>
        <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
           {
            aboutSection.map((item,index)=>(
               
                <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-blue-200 rounded-lg py-2">
                <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover" alt=''/>
                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                <h1 className='text-[12px] md:group-hover:text-black text-gray-500 px-7'>{item.desc}</h1>
                    </div>
             

            ))
            }
            
        </div>
    </div>
   
  )
}

export default About
