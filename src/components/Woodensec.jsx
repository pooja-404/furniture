import React from 'react'
import sofa from '../assets/images/png/sofa.png'

function Woodensec() {
    return (
        <div className='bg-[#2D39490A] my-16 pt-24 pb-9 relative'>
            <div className="max-w-[1140px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row -mx-3  '>
                    <div className='lg:w-4/12  w-full  px-3 relative z-[1]' data-aos="zoom-in-right">
                        <div className='flex items-center gap-2'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-Poppins text-xl font-normal '>Shopping Store</h2>
                        </div>
                        <h2 className='text-[#243040] font-Poppins sm:text-[35px] text-2xl font-bold lg:max-w-[436px] pt-5 sm:leading-normal'>Wooden Sofa Starts From ₹1200.00</h2>
                        <button className='before:ease relative bg-[#BD7D41]  text-white font-Poppins sm:text-xl text-[15px] mt-12  text-center font-semibold text-nowrap  duration-300 overflow-hidden shadow-2xl transition-all before:absolute  before:h-0 before:w-72 before:origin-center before:-translate-x-24 before:rotate-45 before:bg-[#243040] before:duration-300 hover:text-white hover:shadow-[6px_13px_38px_0px_#0000001F] hover:before:h-72  hover:before:w-[80rem] hover:before:-translate-y-32 flex items-center justify-center'>
                            <span class="relative z-10 text-nowrap p-[19px_48px_19px_48px] ">SHOP NOW</span>
                        </button>
                    </div>
                    <div className='lg:w-8/12  w-full pt-9 lg:pt-0' data-aos="zoom-in-left">
                        <img src={sofa} alt="chair" className='z-[1] w-full' />
                    </div> 
                </div>
            </div>
            <div className='max-w-[741px] w-full h-full max-h-[336px] bg-[#243040] lg:absolute bottom-[-75px] right-0 -z-10'></div>
        </div>
    )
}
export default Woodensec
