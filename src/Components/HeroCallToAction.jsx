import React from 'react'
import "../styles/heroCallToAction.css"

const HeroCallToAction = () => {
    return (

        <>
            <div id='heroCard' className="bg-white bg-opacity-10 backdrop-blur-md rounded drop-shadow-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../public/destination.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-7xl font-bold text-white text-center flex justify-center">My Tinerary!</h1>
                        <p className="py-6 font-bold text-white text-xl">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroCallToAction