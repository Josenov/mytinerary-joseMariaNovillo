import React from 'react'

const HeroCallToAction = () => {
    return (
        <div className="hero bg-white bg-opacity-10 backdrop-blur-md rounded drop-shadow-lg">
            <div className="hero-content flex-col lg:flex-row w-128">
                <img src="../public/destination.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">MyTinerary!</h1>
                    <p className="py-6 font-bold text-white">Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    )
}

export default HeroCallToAction