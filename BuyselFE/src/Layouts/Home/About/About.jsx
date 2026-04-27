import React, { useEffect, useState } from 'react'
import StatsCards from './Card'
import { HomeAboutimages } from '../../../Constance/constance'
import ButtonHead from '../../../Components/ButtonHead/ButtonHead'

function About() {
    const[about,setAbout]=useState([])

    useEffect(()=>{
      setAbout(HomeAboutimages)
    },[])

  return (
    <section className='w-full py-3'>
      <div className="mx-[30px] lg:mx-[74px]">

        <div className="inline-block">
          <p className='host-grotesk font-[450] text-[14px] leading-[100%] text-[#322B2B] mb-[9px]'>
            Simple. Trusted. Hassle-Free Property Search.
          </p>

          <hr className="border-t border-[#e6d7d7] w-[110%]" />
        </div>

        <div className='mt-[18px]'>
          <h2 className='mb-2 instrument-sans font-[700] text-[24px] leading-[100%] text-black'>About BuySel</h2>
          <p className='mb-[17px] host-grotesk font-[600] text-[16px] leading-[25px] text-[#5b5050] w-full md:max-w-[70%] lg:max-w-[50%]'>
            BuySel is a modern real estate platform designed to make property searching simple and transparent.
             We offer verified listings, trusted agents and a smooth experience for buying, renting and leasing.
             With smart filters and clear details, BuySel helps you find the right property quickly and confidently.</p>
            
            <ButtonHead color='bg-[#edebeb]' text="Learn More" textColor='black' hover="" path="/about"/>
             
        </div>

        <StatsCards />

        <div className='mt-16'>
          <p className='host-grotesk gap-y-4 font-[400] text-[15px] leading-[135%] w-full md:max-w-[50%] lg:max-w-[30%]'>We are a passionate group of people who care about helping buyers, sellers, and agents connect effortlessly.
             Every feature, design, and update on BuySel is crafted with your ease and comfort in mind.</p>
        </div>




        <div className='my-7 flex flex-row items-center gap-[12px] '>
        <div className="flex">
  {about.map((item, index) => (
    <img
      key={item.id}
      src={item.image}
      alt={item.name}
      className={`
        rounded-full object-cover
        w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] lg:w-[95px] lg:h-[95px]
        ${index !== 0 ? "-ml-[6px] sm:-ml-[8px] md:-ml-[10px] lg:-ml-[12px]" : ""}
      `}
      style={{ zIndex: about.length - index }}
    />
  ))}
</div>


        <h2 className="host-grotesk text-[14px] font-[500] text-[#1A3102ED] leading-[100%]">
          The People <br /> Behind BuySel
        </h2>

        </div>



      </div>
    </section>
  )
}

export default About


