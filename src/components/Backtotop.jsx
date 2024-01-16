// import React from "react";
// import backtop from '../assets/images/png/backtop.png'
// const Backtotop = () => {
//     const [position, setPosition] = React.useState({ top: 0, left: 0 });
//     React.useEffect(() => {
//         window.scroll({
//             top: position.top,
//             left: position.left,
//             behavior: "smooth",
//         });
//     });
//     const scrollTop = React.useRef();
//     React.useEffect(() => {
//         window.addEventListener("scroll", (e) => {
//             window.scrollY > 3000
//                 ? (scrollTop.current.style.display = "inline-block")
//                 : (scrollTop.current.style.display = "none");
//         });
//     });
//     return (
//         <div>
//             <div className="container mx-auto px-3 max-w-[1150px]">
//                 <div
//                     onClick={() =>
//                         setPosition({ ...position, position: { top: 0, left: 0 } })
//                     }
//                     className="fixed hidden bottom-[3%] right-[2%] z-30 translate-y-[0%] animate-bounce"
//                     ref={scrollTop}
//                 >
//                     <div className="h-[52px] w-[52px]  rounded-[10px] cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] bg-[#BD7D41] shadow-[6px_13px_38px_0px_#0000001F]  flex justify-center items-center">
//                         <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M8 0.879028L0.938995 7.93903L3.061 10.061L8 5.12103L12.939 10.061L15.061 7.93903L8 0.879028Z" fill="white" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Backtotop;
import React, { useState } from "react";

const Backtotop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button
                className="group animate-bounce-slow flex justify-center items-center p-2 w-[60px] h-[65px] bg-[#0109 2A]  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 translate-y-[0%] animate-bounce overflow-auto "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <div className="h-[50px] w-[150%]  rounded-[10px] cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] bg-gradient1 shadow-[6px_13px_38px_0px_#0000001F]  flex justify-center items-center">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0.879028L0.938995 7.93903L3.061 10.061L8 5.12103L12.939 10.061L15.061 7.93903L8 0.879028Z" fill="white" />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default Backtotop;