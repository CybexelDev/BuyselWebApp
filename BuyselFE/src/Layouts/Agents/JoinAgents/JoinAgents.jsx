import React from 'react'

const JoinAgents = () => {
    return (
        <div>
            <div className='bg-[#b7df8d] w-full h-[600px] flex p-2 md:p-1 justify-center items-center'>
                <div className='bg-white w-[100%] md:w-[640px] p-3 md:p-6 rounded-[40px] flex flex-col justify-center items-center shadow-xl' >
                    <p className='host-grotesk font-[700] text-[32px] mt-10'>JOIN AS AN</p>
                    <p className=' host-grotesk font-[700] text-[32px] text-[#74c222]'>AGENT</p>

                    <p className='text-[#827C7C] mx-7 mt-2 text-center font-[500] host-grotesk'>Partner with BuySel to list your properties, reach more buyers and sellers, and grow your real estate network.</p>

                    <button className='bg-[#74c222]  flex gap-1 py-2 px-6 text-[#ffffff] rounded-[9px] mt-5 mb-10 cursor-pointer hover:bg-[#64a71c] host-grotesk'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mt-1' width="16" height="16" viewBox="0 0 16 16">
                            <path fill="#fff" d="M6.5 12c0 .706.133 1.38.375 2H0a7 7 0 0 1 4.812-6.651a4 4 0 1 1 5.42-.992c-.283.387-.682.657-1.081.927q-.207.137-.406.282A5.5 5.5 0 0 0 6.5 12" />
                            <path fill="#fff" fill-rule="evenodd" d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4.75-2v1.25H10v1.5h1.25V14h1.5v-1.25H14v-1.5h-1.25V10z" clip-rule="evenodd" />
                        </svg>Join as an Agent</button>
                </div>
            </div>
        </div>
    )
}

export default JoinAgents