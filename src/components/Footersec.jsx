import React from 'react'
import logo from '../assets/images/png/logo.webp'
const pooja = new Date();
const year = pooja.getFullYear();

function Footersec() {
    return (
        <div className='bg-[#243040]'>
            <div className="max-w-[1320px] px-3 mx-auto">
                <div className='flex flex-wrap flex-row py-14 -mx-3 '>
                    <div className='md:w-6/12 w-full  px-3' data-aos="fade-down-right">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <img src={logo} alt="logo" />
                            <h2 className='text-white font-Roboto text-[33px] font-bold leading-7'>FURNITURE</h2>
                        </div>
                        <p className='text-white text-sm font-Roboto font-normal max-w-[338px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                        <div className='flex gap-3 pt-4'>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="p-[6px] border-[1px] border-white rounded-full hover:border-transparent group duration-300"
                            >
                                <svg
                                    className=" group-hover:scale-[200%] duration-300"
                                    width="13"
                                    height="11"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.4513 6.07621C10.3882 6.07621 9.349 6.39145 8.46507 6.98208C7.58113 7.5727 6.89219 8.41218 6.48536 9.39435C6.07853 10.3765 5.97209 11.4573 6.17949 12.4999C6.38689 13.5426 6.89882 14.5004 7.65054 15.2521C8.40226 16.0038 9.36001 16.5157 10.4027 16.7231C11.4454 16.9305 12.5261 16.8241 13.5083 16.4173C14.4905 16.0104 15.3299 15.3215 15.9206 14.4376C16.5112 13.5536 16.8264 12.5144 16.8264 11.4513C16.8248 10.0262 16.258 8.66 15.2503 7.65232C14.2426 6.64464 12.8764 6.07782 11.4513 6.07621ZM11.4513 15.4242C10.6655 15.4242 9.89743 15.1912 9.24409 14.7547C8.59075 14.3181 8.08153 13.6976 7.78083 12.9717C7.48013 12.2457 7.40145 11.4469 7.55475 10.6762C7.70804 9.90557 8.08643 9.19767 8.64205 8.64205C9.19767 8.08643 9.90557 7.70804 10.6762 7.55475C11.4469 7.40145 12.2457 7.48013 12.9717 7.78083C13.6976 8.08153 14.3181 8.59075 14.7547 9.24409C15.1912 9.89743 15.4242 10.6655 15.4242 11.4513C15.423 12.5046 15.0041 13.5144 14.2593 14.2593C13.5144 15.0041 12.5046 15.423 11.4513 15.4242ZM16.5927 0H6.30991C4.63701 0.00191744 3.03317 0.667325 1.85025 1.85025C0.667325 3.03317 0.00191744 4.63701 0 6.30991V16.5927C0.00191744 18.2656 0.667325 19.8695 1.85025 21.0524C3.03317 22.2353 4.63701 22.9007 6.30991 22.9026H16.5927C18.2656 22.9007 19.8695 22.2353 21.0524 21.0524C22.2353 19.8695 22.9007 18.2656 22.9026 16.5927V6.30991C22.9007 4.63701 22.2353 3.03317 21.0524 1.85025C19.8695 0.667325 18.2656 0.00191744 16.5927 0ZM21.5004 16.5927C21.499 17.8939 20.9814 19.1413 20.0614 20.0614C19.1413 20.9814 17.8939 21.499 16.5927 21.5004H6.30991C5.00875 21.499 3.7613 20.9814 2.84124 20.0614C1.92118 19.1413 1.40366 17.8939 1.4022 16.5927V6.30991C1.40366 5.00875 1.92118 3.7613 2.84124 2.84124C3.7613 1.92118 5.00875 1.40366 6.30991 1.4022H16.5927C17.8939 1.40366 19.1413 1.92118 20.0614 2.84124C20.9814 3.7613 21.499 5.00875 21.5004 6.30991V16.5927ZM18.696 5.37511C18.696 5.60622 18.6275 5.83213 18.4991 6.02429C18.3707 6.21645 18.1882 6.36622 17.9747 6.45466C17.7612 6.5431 17.5262 6.56624 17.2996 6.52116C17.0729 6.47607 16.8647 6.36478 16.7013 6.20136C16.5378 6.03794 16.4266 5.82974 16.3815 5.60307C16.3364 5.3764 16.3595 5.14146 16.448 4.92794C16.5364 4.71443 16.6862 4.53193 16.8783 4.40353C17.0705 4.27514 17.2964 4.20661 17.5275 4.20661C17.8373 4.20698 18.1343 4.33021 18.3534 4.54926C18.5724 4.76832 18.6957 5.06532 18.696 5.37511Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                className="p-[6px] border-[1px] group border-white rounded-full hover:border-transparent duration-300"
                            >
                                <svg
                                    className=" group-hover:scale-[200%] duration-300"
                                    width="13"
                                    height="11"
                                    viewBox="0 0 13 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.4335 1.91309C12.5128 1.76645 12.578 1.6127 12.6285 1.45386C12.6519 1.38019 12.6524 1.30115 12.6299 1.2272C12.6074 1.15325 12.563 1.08786 12.5026 1.03966C12.4421 0.991456 12.3685 0.962715 12.2914 0.957228C12.2143 0.951741 12.1374 0.969766 12.0707 1.00892C11.7048 1.22633 11.3086 1.3883 10.8952 1.48957C10.3933 1.03662 9.74148 0.785507 9.06542 0.784668C8.69813 0.78495 8.33467 0.859395 7.99684 1.00354C7.65901 1.14768 7.35377 1.35856 7.09941 1.62352C6.84505 1.88849 6.64681 2.20209 6.51657 2.54552C6.38634 2.88895 6.32679 3.25514 6.3415 3.62214C4.7353 3.41994 3.26858 2.60717 2.24563 1.35245C2.20643 1.30491 2.15634 1.26754 2.09961 1.24351C2.04289 1.21947 1.9812 1.20948 1.91978 1.21439C1.85837 1.2193 1.79905 1.23896 1.74685 1.27169C1.69466 1.30443 1.65114 1.34929 1.62 1.40244C1.38576 1.80448 1.25844 2.25983 1.25019 2.72505C1.24194 3.19027 1.35303 3.64985 1.57286 4.05994C1.51894 4.06904 1.46715 4.08792 1.42002 4.11565C1.36228 4.15247 1.31474 4.20324 1.28178 4.26328C1.24883 4.32332 1.23153 4.39069 1.23148 4.45917C1.23148 5.26978 1.59214 6.01396 2.17349 6.51961L2.1485 6.54461C2.10461 6.59426 2.07441 6.65448 2.06089 6.71936C2.04736 6.78423 2.05097 6.85151 2.07136 6.91456C2.19259 7.29274 2.395 7.63986 2.66443 7.93162C2.93386 8.22338 3.2638 8.45273 3.63115 8.60361C2.87668 8.97167 2.03234 9.1152 1.19862 9.01713C1.11293 9.0084 1.02675 9.02834 0.953598 9.07383C0.880448 9.11932 0.824455 9.1878 0.794393 9.26853C0.765524 9.34985 0.764982 9.43855 0.792855 9.52022C0.820728 9.6019 0.87538 9.67176 0.947944 9.71847C2.08137 10.4459 3.39994 10.8324 4.74672 10.8319C9.16041 10.8319 11.7986 7.24666 11.7986 3.78069L11.7979 3.66357C12.2257 3.32962 12.5972 2.92938 12.8985 2.47801C12.9441 2.40978 12.9665 2.32866 12.9625 2.24668C12.9584 2.1647 12.928 2.08622 12.8759 2.02284C12.8237 1.95946 12.7525 1.91457 12.6729 1.8948C12.5932 1.87503 12.5093 1.88144 12.4335 1.91309ZM11.1873 3.16649C11.1355 3.20376 11.0938 3.25341 11.0661 3.31093C11.0384 3.36844 11.0256 3.43198 11.0287 3.49573C11.033 3.59 11.0352 3.68571 11.0352 3.77998C11.0352 6.87099 8.68333 10.0684 4.74743 10.0684C4.04546 10.0687 3.34844 9.95092 2.68557 9.71989C3.47946 9.56775 4.22524 9.22731 4.86027 8.72717C4.92209 8.67843 4.96734 8.61179 4.98985 8.53635C5.01235 8.46091 5.011 8.38037 4.98599 8.30573C4.96098 8.23109 4.91353 8.16599 4.85012 8.11935C4.78671 8.0727 4.71044 8.04677 4.63173 8.04512C4.32379 8.03924 4.02155 7.96107 3.74937 7.81692C3.47719 7.67276 3.24269 7.46666 3.0648 7.21523C3.24549 7.20309 3.42261 7.17309 3.59473 7.12667C3.67803 7.10438 3.75132 7.05451 3.80263 6.9852C3.85395 6.9159 3.88026 6.83125 3.87728 6.74507C3.87429 6.65888 3.84219 6.57626 3.78621 6.51067C3.73022 6.44508 3.65366 6.4004 3.56902 6.38391C3.22123 6.31317 2.89921 6.1492 2.63742 5.90955C2.37563 5.6699 2.18392 5.36359 2.08279 5.02338C2.27277 5.07123 2.46774 5.09909 2.66271 5.10551C2.83055 5.1048 2.98624 5.00196 3.03838 4.84055C3.09051 4.67914 3.02909 4.50131 2.88697 4.40704C2.55092 4.18314 2.29218 3.86098 2.14608 3.48453C1.99997 3.10809 1.97363 2.69572 2.07065 2.30375C3.31122 3.57666 4.98637 4.33466 6.76145 4.42632C6.88714 4.42703 6.99713 4.38204 7.07355 4.28991C7.14997 4.19778 7.17925 4.07565 7.15211 3.95853C7.05443 3.53787 7.09812 3.09674 7.27642 2.70342C7.45471 2.31009 7.75767 1.9865 8.13841 1.78271C8.51916 1.57892 8.95645 1.5063 9.38262 1.57609C9.8088 1.64588 10.2001 1.85418 10.4959 2.16877C10.5403 2.21608 10.5959 2.25132 10.6577 2.27119C10.7194 2.29105 10.7851 2.29489 10.8488 2.28232C10.9666 2.25876 11.083 2.23162 11.198 2.20019C11.1462 2.239 11.0923 2.275 11.0366 2.30803C10.9625 2.3534 10.9061 2.42264 10.8767 2.50435C10.8473 2.58606 10.8465 2.67536 10.8746 2.75754C10.9028 2.83971 10.958 2.90985 11.0313 2.95641C11.1047 3.00297 11.1917 3.02316 11.278 3.01365L11.408 2.99723C11.3364 3.05619 11.2628 3.11264 11.1873 3.16649Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/"
                                target="_blank"
                                className="p-[5px_7px] border-[1px] group border-white rounded-full hover:border-transparent duration-300"
                            >
                                <svg
                                    className=" group-hover:scale-[200%] duration-300"
                                    width="8"
                                    height="13"
                                    viewBox="0 0 8 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.04765 0.0235704H5.1422C2.71538 -0.000712035 2.40542 1.50123 2.40542 3.12672V4.30871H1.33414C1.28572 4.30224 1.23646 4.30702 1.19018 4.32268C1.14391 4.33834 1.10187 4.36445 1.06733 4.399C1.03279 4.43354 1.00667 4.47558 0.991013 4.52185C0.975355 4.56812 0.970573 4.61738 0.977041 4.6658V6.80837C0.970573 6.85679 0.975355 6.90605 0.991013 6.95232C1.00667 6.99859 1.03279 7.04064 1.06733 7.07518C1.10187 7.10972 1.14391 7.13583 1.19018 7.15149C1.23646 7.16715 1.28572 7.17193 1.33414 7.16547H2.40542V12.5219C2.39947 12.5704 2.40468 12.6196 2.42067 12.6658C2.43665 12.712 2.46298 12.7539 2.49764 12.7884C2.5323 12.8228 2.57437 12.8489 2.62065 12.8646C2.66693 12.8803 2.71619 12.8852 2.76466 12.879H4.94651C5.15719 12.9033 5.32788 12.7326 5.26075 12.5219L5.26218 7.16547H7.04765C7.09607 7.17193 7.14533 7.16715 7.1916 7.15149C7.23788 7.13583 7.27992 7.10972 7.31446 7.07518C7.349 7.04064 7.37512 6.99859 7.39078 6.95232C7.40643 6.90605 7.41122 6.85679 7.40475 6.80837V4.6658C7.41122 4.61738 7.40643 4.56812 7.39078 4.52185C7.37512 4.47558 7.349 4.43354 7.31446 4.399C7.27992 4.36445 7.23788 4.33834 7.1916 4.32268C7.14533 4.30702 7.09607 4.30224 7.04765 4.30871H5.26004L5.26218 3.23742C5.33146 2.78106 5.33146 2.85533 5.75497 2.88033H7.03265C7.13193 2.85819 7.23763 2.87033 7.3119 2.7982C7.38618 2.72606 7.42903 2.62751 7.40403 2.52323V0.380665C7.41063 0.332284 7.40596 0.283034 7.39039 0.236754C7.37482 0.190474 7.34878 0.148414 7.31428 0.113853C7.27979 0.0792919 7.23778 0.0531628 7.19154 0.0375027C7.14529 0.0218427 7.09605 0.0170748 7.04765 0.0235704ZM6.66556 2.12614L5.76997 2.09186C4.66083 2.09186 4.56799 2.69393 4.56799 3.31027L4.56513 4.66437C4.56504 4.71452 4.57483 4.76419 4.59396 4.81054C4.61308 4.85689 4.64116 4.89902 4.67658 4.93451C4.712 4.97 4.75408 4.99816 4.8004 5.01737C4.84671 5.03658 4.89636 5.04647 4.94651 5.04647H6.69056V6.42628H4.94793C4.84672 6.42628 4.74964 6.46644 4.67801 6.53794C4.60637 6.60944 4.56603 6.70644 4.56584 6.80766L4.56513 12.1648H3.11961V6.80837C3.11961 6.59768 2.97606 6.42699 2.76466 6.42699H1.69123V5.04718H2.76466C2.81477 5.04726 2.8644 5.03745 2.91073 5.01834C2.95705 4.99922 2.99915 4.97116 3.03462 4.93577C3.10604 4.86363 3.1189 4.7665 3.1189 4.66509V3.12601C3.1189 1.5248 3.44242 0.762043 5.14148 0.762043H6.66485V2.12614H6.66556Z"
                                        fill="white"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-6/12 w-full px-3 pt-7 lg:pt-0' data-aos="fade-down-left" >
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='xl:w-4/12 sm:w-4/12 w-1/2  pr-3 pt-7 lg:pt-0 px-3 '>
                                <h2 className='text-white font-Roboto font-medium text-sm  relative after:absolute  after:h-[1px] hover:after:absolute after:bottom-[-5px] after:w-[80%] after:left-0  after:bg-[#BD7D41]'>ABOUT STORE</h2>
                                <ul>
                                    <li className='pt-3'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Home</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Shop</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Product</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Festival Offer</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Log In</a></li>
                                </ul>
                            </div>
                            <div className='xl:w-4/12 sm:w-4/12 w-1/2 pr-3  pt-7 lg:pt-0 px-3 '>
                                <h2 className='text-white font-Roboto font-medium text-sm  relative after:absolute  after:h-[1px] hover:after:absolute after:bottom-[-5px] after:w-[80%] after:left-0  after:bg-[#BD7D41]'>BRANDS</h2>
                                <ul className='pl-0'>
                                    <li className='pt-3'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Album</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Shop</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Product</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Festival Offer</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Log In</a></li>

                                </ul>
                            </div>
                            <div className='xl:w-4/12 sm:w-4/12 w-1/2 pr-3 pt-7 lg:pt-0 px-3  '>
                                <h2 className='text-white font-Roboto font-medium text-sm  relative after:absolute  after:h-[1px] hover:after:absolute after:bottom-[-5px] after:w-[80%] after:left-0  after:bg-[#BD7D41]'>CATEGORIES</h2>
                                <ul className='pl-0'>
                                    <li className='pt-3'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Single</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Aleeper Sofas</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Accent Chairs</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Festival Offer</a></li>
                                    <li className='pt-2'><a href="" className='text-white text-sm font-normal font-Roboto  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#BD7D41] '>Log In</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-[#FFFFFF80] w-full border'></div>
            <p className='text-white text-sm font-normal font-Roboto text-center py-5'>@copyright{year}</p>
        </div>
    )
}

export default Footersec