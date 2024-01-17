import React, { useEffect, useState } from "react";
import preloder from '../assets/images/png/pre.webp'

const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center flex-col text-center">
                        <div>
                            <img src={preloder} alt="1" className="w-full" />
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloder