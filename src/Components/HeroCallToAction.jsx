import React from 'react'
import "../styles/heroCallToAction.css"
import { Link as LinkRouter } from 'react-router-dom'

const HeroCallToAction = () => {
    return (

        <>
            <div id='heroCard' className="bg-white bg-opacity-20 backdrop-blur-md rounded-[25px] lg:mr-32 drop-shadow-lg flex flex-col  w-[450px]">
                <div className="hero-content">
                    
                    <div className='text-center flex flex-col items-center'>
                        <h1 className="text-7xl font-bold text-white text-center ">My Tinerary!</h1>
                        <p className="py-6 font-bold text-white text-xl">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <img src="../public/destination.jpg" className="max-w-sm rounded-lg shadow-2xl m-2" />
                        <LinkRouter to='/cities'>
                            <button className="btn btn-primary bg-[#004A95]">View More</button>
                        </LinkRouter>
                        

                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroCallToAction