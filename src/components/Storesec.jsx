import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assets/images/png/sliderimg1.png'
import sliderimg2 from '../assets/images/png/sliderimg2.png'
import sliderimg3 from '../assets/images/png/sliderimg3.png'
import sliderimg4 from '../assets/images/png/sliderimg4.png'

const carddata = [
    {
        img: sliderimg1,
        heading: "Single Sofa",
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
        text: "₹1200.00",
    },
    {
        img: sliderimg2,
        heading: "Single Sofa",
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),

        text: "₹1200.00",
    },
    {
        img: sliderimg3,
        heading: "Single Sofa",
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
        text: "₹1200.00",
    },
    {
        img: sliderimg4,
        heading: "Single Sofa",
        svg: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FFD135" />
                </svg>
            </>
        ),
        text: "₹1200.00",
    }
];
const Storesec = () => {
    const first = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true

    };
    const arrowbtn = React.useRef(null);
    const cards = carddata.map((carddata) => (
        <div className='pl-[18px] '>
            <div className="cards max-w-[295px] p-[15px_18px_22px_18px] bg-white shadow-[2px_7px_28px_0px_0000000D]  mt-5">
                <img src={carddata.img} alt="img" className='w-full' />
                <div className=" flex justify-between items-center pt-3 ">
                    <p className="font-Poppins text-xl font-medium text-[#000] text-nowrap ">
                        {carddata.heading}
                    </p>
                    <div className='flex gap-1'>
                        <span>{carddata.svg}</span>
                        <span>{carddata.svg}</span>
                        <span>{carddata.svg}</span>
                        <span>{carddata.svg}</span>
                        <span>{carddata.svg}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <p className="font-Poppins font-semibold text-[29px] text-[#000000]">
                        {carddata.text}
                    </p>
                    <p className="font-Poppins font-normal text-[11px] text-[#C4C4C4]">
                        {carddata.text}
                    </p>
                </div>
            </div>
        </div>
    ));
    return (
        <div className='relative overflohidden overflow-x-clip mt-24 lg:mt-0'>
            <div className='bg-[#2D39490A] pt-12 mt-9 pb-24 sec relative z-[1] '>
                <div className='max-w-[1320px]  px-3 mx-auto'>
                    <div className='flex flex-wrap flex-row -mx-3 '>
                        <div className='md:w-5/12 w-full px-3 z-[2]' data-aos="fade-up-right">
                            <div className='flex items-center gap-2 max-lg:justify-center'>
                                <div className='h-[1px] w-[95px] bg-[#000]'></div>
                                <h2 className='text-[#BD7D41] font-Poppins text-xl font-normal max-lg:text-center'>Shopping Store</h2>
                            </div>
                            <h2 className='text-[#243040] font-Poppins sm:text-[35px] text-2xl font-bold lg:max-w-[436px] pt-6 sm:leading-normal max-lg:text-center'>Buy trending furniture Products.</h2>
                            <p className='font-Poppins font-normal text-lg text-[#000000B2] lg:max-w-[422px] pt-5 max-lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta</p>
                            <div className="flex gap-8 mt-8 relative justify-center">
                                <button onClick={() => arrowbtn?.current?.slickPrev()} className="rounded-[10px] w-[41px] h-[41px] flex items-center justify-center bg-white lg:absolute left-[65px] top-2 hover:bg-[#BD7D41] duration-300 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" viewBox="0 0 21 8" fill="none">
                                        <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="black" />
                                    </svg>
                                </button>
                                <button onClick={() => arrowbtn?.current?.slickNext()} className="rounded-[10px] w-[41px] h-[41px] flex items-center justify-center bg-white lg:absolute left-[2px] top-2 hover:bg-[#BD7D41] duration-300" >
                                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="md:w-7/12 w-full  px-3 flex flex-col z-[1] pt-12 lg:pt-0" data-aos="fade-up-left">
                            <Slider ref={arrowbtn} {...settings}>{cards}</Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" xl:block hidden xl:max-w-[741px] xl:max-h-[450px] max-h-[200px] bg-[#243040] bg-gradient1 w-full h-full lg:absolute xl:bottom-[47%] bottom-[10%] right-[-15px] -z-10 "></div>
        </div>
    )
}
export default Storesec
