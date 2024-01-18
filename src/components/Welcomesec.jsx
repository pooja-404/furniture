import React from 'react'
import chair from '../assets/images/png/chair.webp'

function Welcomesec() {
    return (
        <div className='pt-24 lg:pb-44'>
            <div className="max-w-[1320px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row -mx-3 justify-center  '>
                    <div className='lg:w-2/4 px-3 relative z-[1]' data-aos="fade-left">
                        <div className='relative'>
                            <img src={chair} alt="chair" className='z-[1] max-lg:w-full shadow-[3px_8px_26px_0px_#0000001F]' />
                        </div>
                        <div className='w-[416px] h-[336px] bg-gradient1  absolute top-[-31px] left-[-27px] -z-10'></div>
                    </div>
                    <div className='lg:w-2/4  w-full  px-3 pt-12 lg:pt-0' data-aos="fade-right">
                        <div className='flex items-center gap-2 max-lg:justify-center'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-Poppins text-xl font-normal max-lg:text-center'>Welcome Our Story</h2>
                        </div>
                        <h2 className='text-[#243040] font-Poppins text-2xl sm:text-[35px] font-bold lg:max-w-[436px] pt-5 max-lg:text-center  sm:leading-normal'>We create the product you tell us you wish existed.</h2>
                        <p className='font-Poppins font-normal text-lg text-[#000000B2] pt-5 max-lg:text-center  sm:leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <div className='max-lg:flex max-lg:justify-center '>
                            <button className="before:ease relative   font-Poppins text-xl bg-[#BD7D41]  text-center font-semibold mt-9 overflow-hidden text-white  transition-all before:absolute  before:h-0 before:w-64 before:origin-center before:-translate-x-24 before:rotate-45 before:bg-[#243040] before:duration-300 hover:text-white hover:shadow-[6px_13px_38px_0px_#0000001F] hover:before:h-72  hover:before:w-[80rem] hover:before:-translate-y-32 flex items-center justify-center ">
                                <span className="relative z-10 text-nowrap p-[19px_48px]">READ MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcomesec
