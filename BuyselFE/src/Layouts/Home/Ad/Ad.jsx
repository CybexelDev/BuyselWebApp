import React from 'react'
import './ad.css'

const Ad = () => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center mt-23'>
                <p className='text-[20px] max-w-[850px]  mb-7 poppins flex items-center justify-center text-center px-3'>BuySel connects you to trusted agents and genuine property listings in one place. Our platform is designed to make your search faster, smoother and more convenient.</p>
            </div>
            <div className='ad w-full h-[200px] bg-gray-300 rounded-[37px] mt-5'>
                Your Ad Here
            </div>
        </div>
    )
}

export default Ad