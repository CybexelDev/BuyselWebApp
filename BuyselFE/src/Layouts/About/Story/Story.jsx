import React from 'react'
import ceoImg from '../../../assets/images/about/eco.jpeg'
import q1 from '../../../assets/images/about/q1.png'
import q2 from '../../../assets/images/about/q2.png'
import bg from '../../../assets/images/about/bg.png'

const Story = () => {

    return (
        <div>
            <div className='px-3'>
                <p className='text-center text-[#322B2B] text-[14px] font-[400] host-grotesk'>Simple. Trusted. Hassle-Free Property Search.</p>
                <h2 className='text-center text-[24px] font-[700] instrument-sans mt-3'>The Story Behind The Buysel.in</h2>
                <div className='flex items-center justify-center'>
                    <p className='text-center text-[16px] font-[500] host-grotesk max-w-4xl w-full mt-3'>Buysel.in is your one-stop solution for commission-free property transactions. Our mission is to empower users by eliminating middlemen and creating a transparent, efficient platform for buying, selling, renting and leasing.</p>
                </div>
            </div>

            <div className='w-full' style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <section className="relative py-20 px-6 lg:px-20" >

                    <div className="max-w-6xl mx-auto bg-white rounded-[38px] shadow-[0px_8px_30px_rgba(138,138,138,0.25)] p-4 lg:p-7 flex flex-col lg:flex-row items-center gap-8">

                        <div className="w-full lg:w-[350px] max-w-[400px]">
                            <img
                                src={ceoImg}
                                alt="CEO"
                                className="w-full h-[270px] object-cover rounded-[35px]"
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-[22px] font-[700] text-[#181818] mb-4 instrument-sans">
                                A Vision Led by Our CEO & Founder
                            </h2>

                            <p className="text-[#555] text-[16px] leading-6 relative host-grotesk text-[#181818]">
                                <span className="text-[62px] font-bold text-[#000] leading-none  absolute left-[-3px] top-[-5px]">
                                    <img src={q1} className='w-7 h-7 object-contain' />
                                </span>
                                &nbsp;  &nbsp;  &nbsp;&nbsp; &nbsp;At BuySelln, our mission is to bring transparency, simplicity,
                                and reliability to every property transaction. As CEO & Founder,
                                I believe real estate should be accessible, trustworthy, and
                                stress-free for everyone. With a focus on verified listings,
                                customer support, and digital innovation, we are building a
                                platform that empowers buyers, sellers, agents, and renters to
                                make confident decisions.
                                <span className="text-[62px] font-bold text-[#000] leading-none  absolute right-[-3px] left-19">
                                    <img src={q2} className='w-7 h-7 object-contain' />
                                </span>
                            </p>

                            <div className="mt-6">
                                <h4 className=" text-[14px] text-[#181818] host-grotesk italic">
                                    Shahid
                                </h4>
                                <p className="text-[14px] text-[#181818] host-grotesk italic">
                                    Founder & CEO, BuySelln
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">


                        <div className="bg-[#74c222] rounded-[17px] px-4 py-8 text-white">
                            <h3 className="text-[20px] font-[600] mb-2 mt-6 instrument-sans">
                                Our Mission
                            </h3>
                            <p className="text-[15px] leading-6  text-white host-grotesk">
                                We make real estate simple with verified listings, clear
                                processes and direct connections between buyers, sellers,
                                renters and agents.
                            </p>
                        </div>


                        <div className="bg-[#111111] rounded-[17px] px-4 py-8 text-white shadow-md">
                            <h3 className="text-[20px] font-[600] mb-2 mt-6 instrument-sans">
                                Our Vision
                            </h3>
                            <p className="text-[15px] leading-6  text-white host-grotesk">
                                To become India’s most trusted, technology-driven real estate
                                platform with seamless, transparent and commission-free
                                property transactions.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Story