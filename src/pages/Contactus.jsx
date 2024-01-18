import React from 'react'
import Productsec from '../components/Productsec'
import Footersec from '../components/Footersec'
import Headersec from '../components/Headersec'



function Contactus() {
    return (
        <>
            <div className='bg-[url(./assets/images/png/headerimg.webp)] bg-cover bg-center bg-no-repeat sm:min-h-[100vh] min-h-[80vh]'>
                <Headersec />
            </div>
            <Productsec />
            <Footersec />
        </>
    )
}

export default Contactus
