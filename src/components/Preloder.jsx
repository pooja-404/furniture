import React, { useEffect, useState } from "react";
import preloder from '../assets/images/png/sofa.png'

const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#243040] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center flex-col text-center ">
                        <div className="preloader flex gap-4  justify-center items-center h-screen duration-300 ">
                            <p className=" text-white font-Poppins font-bold md:text-[55px]  text-lg">LOADING...</p>
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#BD7D41] border-solid"></div>
                            
                        {/* <p className=" text-white font-Poppins font-bold text-[48px] text-sm md:text-lg">FURNITURE...</p> */}
                            <img src={preloder} alt="img" className="h-[20%] w-[25%] animate-bounce-slow object-fit" />
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    )
}

export default Preloder