import React from 'react'
import '../styles/welcome.css'
import HeroCallToAction from '../Components/HeroCallToAction'
import Carousel from '../Components/Carousel'


const Welcome = () => {
    return (
        <>
                <main className='welcome min-h-screen'>
            <HeroCallToAction />
            
        </main>
        <div>
            <Carousel />
        </div>
        </>

    )
}

export default Welcome