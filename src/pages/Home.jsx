import React from 'react'
import Headersec from '../components/Headersec'
import Preloder from '../components/Preloder'
import Welcomesec from '../components/Welcomesec'
import Storesec from '../components/Storesec'
import Productsec from '../components/Productsec'
import Woodensec from '../components/Woodensec'
import Cardbgsec from '../components/Cardbgsec'
import Latestsec from '../components/Latestsec'
import Testimonial from '../components/Testimonial'
import Footersec from '../components/Footersec'
import Backtotop from '../components/Backtotop'


function Home() {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[url(./assets/images/png/headerimg.webp)] bg-cover bg-center bg-no-repeat sm:min-h-[100vh] min-h-[80vh]'>
                <Headersec />
            </div>
            <Preloder />
            <Welcomesec />
            <Storesec />
            <Productsec />
            <Woodensec />
            <Latestsec />
            <Cardbgsec />
            <Testimonial />
            <Footersec />
            <Backtotop />

        </div>
    )
}
export default Home
