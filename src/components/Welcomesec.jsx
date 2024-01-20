import React from 'react'
import chair from '../assets/images/png/chair.png'

function Welcomesec() {
    return (
        <div className='md:pt-24 pt-20 xl:pb-44'>
            <div className="max-w-[1320px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row -mx-3 justify-center  '>
                    <div className='lg:w-5/12 px-3 ' data-aos="fade-left">
                        <div className='relative'>
                            <div className='w-[416px] h-[336px] bg-gradient1  absolute top-[-50px] left-[-39px] -z-10'></div>
                            <img src={chair} alt="chair" className=' w-full h-[70%] shadow-[3px_8px_26px_0px_#0000001F]  ' />
                            <div className="max-w-[254px] max-h-[78px] w-full h-full bg-white absolute bottom-0 right-0 flex py-4 px-[15px] items-center justify-between ">
                                <p className="font-poppins text-sm  leading-normal font-normal text-center text-[#243040]">
                                    Explore Video
                                </p>
                                <div className="w-[30%] border-t border-[#243040] border-solid"></div>
                                <a href="https://www.youtube.com/watch?v=b372W08W6cA">
                                    <svg
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="22.5" cy="22.5" r="22.5" fill="#BD7D41" />
                                        <path
                                            d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-7/12  w-full  px-3 pt-12 lg:pt-0 lg:pl-24' data-aos="fade-right">
                        <div className='flex items-center gap-2 max-lg:justify-center'>
                            <div className='h-[1px] w-[95px] bg-[#000]'></div>
                            <h2 className='text-[#BD7D41] font-Poppins text-xl font-normal max-lg:text-center'>Welcome Our Story</h2>
                        </div>
                        <h2 className='text-[#243040] font-Poppins text-2xl sm:text-[35px] font-bold lg:max-w-[436px] pt-5 max-lg:text-center  sm:leading-normal'>We create the product you tell us you wish existed.</h2>
                        <p className='font-Poppins font-normal text-lg text-[#000000B2] pt-5 max-lg:text-center  sm:leading-normal lg:max-w-[530px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
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
