import React from 'react'
import add from '../../../assets/images/icons/add.png'
import add2 from '../../../assets/images/addP/add.png'
import add3 from '../../../assets/images/addP/add2.png'

const AddPropertyAndAgent = () => {
    return (
        <div>
            <div className='md:flex  flex-row mt-[100px]'>
                <div className='md:w-[50%] w-[100%]  h-[100vh] bg-[#b0dc81]'>
                    <div className='flex items-center h-full md:px-16 px-3'>
                        <div className='px-2 md:max-w-[500px]'>
                            <div className=' w-full rounded-[30px] relative'>
                                <img src={add3} alt="plus" className='w-[500px] mb-5  pt-[-20px] mr-8' />
                            </div>
                             
                            <h2 className='text-[25px] mb-5 font-[700] instrument-sans'>Add Your Property & Reach <br />Real Buyers</h2>
                            <p className='text-[16px] mb-8 font-[400] host-grotesk'>List your house, apartment, land, or commercial space in just a few simple steps. Your property becomes visible to thousands of verified buyers and tenants instantly.</p>
                            <button className='bg-[#000000] text-white px-6 py-3 rounded-xl hover:bg-[#6bb436] transition cursor-pointer host-grotesk font-[500] text-[16px]'>
                                <img src={add} alt="plus" className='w-5 h-5 inline-block mr-1' />
                                Add Property</button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-[100%]  h-[100vh] bg-black'>
                    <div className='flex items-center justify-center h-full'>
                        <div className='px-5 md:max-w-[500px]'>
                            <div className=' w-full rounded-[30px] relative'>
                                <img src={add3} alt="plus" className='w-[500px] mb-5  pt-[-20px] mr-8' />
                            </div>
                             
                            <h2 className='text-[25px] mb-5 font-[700] instrument-sans text-white'>Become a BuySel <br />Verified Agent</h2>
                            <p className='text-[16px] mb-8 font-[400] host-grotesk text-white'>Grow your real estate career with BuySel. Get access to genuine leads, build credibility with a verified badge, and manage your listings all in one place.</p>
                            <button className='bg-[#63b010] text-white px-6 py-3 rounded-xl hover:bg-[#6bb436] transition cursor-pointer host-grotesk font-[500] text-[16px]'>
                                <img src={add} alt="plus" className='w-5 h-5 inline-block mr-1' />
                                Join as an Agent</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPropertyAndAgent