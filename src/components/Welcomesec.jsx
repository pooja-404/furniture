import React from 'react'
import chair from '../assets/images/png/chair.png'

function Welcomesec() {
    return (
        <div className='pt-24 xl:pb-32'>
            <div className="max-w-[1140px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row -mx-3 justify-center  '>
                    <div className='lg:w-2/4 px-3 relative z-[1]' data-aos="fade-left">
                        <div className='relative'>
                            <img src={chair} alt="chair" className='z-[1] w-full shadow-[3px_8px_26px_ 0px_#0000001F]' />
                            <div className='absolute w-[254px] h-[78px] bg-white flex items-center gap-4 justify-center bottom-[33px] right-[29px]'>
                                <p className='font-Poppins text-sm font-normal text-[#243040]'>Explore Video</p>
                                <div className='h-[1px] w-[66px] bg-[#000]'></div>
                                <div className='w-[45px] h-[45px] rounded-full bg-[#BD7D41] flex items-center justify-center'>
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 9.5L0.249999 18.5933L0.25 0.406733L16 9.5Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-[416px] h-[336px] bg-gradient1 sm:block hidden sm:absolute sm:top-[-31px] sm:left-[-27px] -z-10'></div>
                    </div>
                    <div className='lg:w-2/4  w-full  px-3 pt-5 lg:pt-0' data-aos="fade-right">
                        <div className='flex items-center gap-2'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-Poppins text-xl font-normal'>Welcome Our Story</h2>
                        </div>
                        <h2 className='text-[#243040] font-Poppins text-2xl sm:text-[35px] font-bold lg:max-w-[436px] pt-5'>We create the product you tell us you wish existed.</h2>
                        <p className='font-Poppins font-normal text-lg text-[#000000B2] pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                        <button class="before:ease relative   font-Poppins text-xl bg-[#BD7D41]  text-center font-semibold mt-9 overflow-hidden text-white shadow-2xl transition-all before:absolute  before:h-0 before:w-64 before:origin-center before:-translate-x-24 before:rotate-45 before:bg-[#243040] before:duration-300 hover:text-white hover:shadow-[6px_13px_38px_0px_#0000001F] hover:before:h-72  hover:before:w-[80rem] hover:before:-translate-y-32 flex items-center justify-center">
                            <span class="relative z-10 text-nowrap p-[19px_48px]">READ MORE</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcomesec
