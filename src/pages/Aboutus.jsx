import React from 'react'
import Latestsec from '../components/Latestsec'
import Footersec from '../components/Footersec'
import Headersec from '../components/Headersec'

function Aboutus() {
    return (
        <>
            <div className='bg-[url(./assets/images/png/headerimg.webp)] bg-cover bg-center bg-no-repeat sm:min-h-[100vh] min-h-[80vh]'>
                <Headersec />
            </div>
            <Latestsec />
            <Footersec />

        </>
    )
}
export default Aboutus