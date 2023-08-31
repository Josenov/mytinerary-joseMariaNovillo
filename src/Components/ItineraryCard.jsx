import React, { useState } from 'react'

const ItineraryCard = () => {
    const [showComment, setShowComment] = useState(false);

    const handleToggleComment = () => {
        setShowComment(!showComment)
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="card w-1/3 glass bg-gray-300 m-4 sm:w-1/2">
                    <figure><img className='rounded-full' src="https://randomuser.me/api/portraits/men/23.jpg" alt="user" /></figure>
                    <div className="card-body flex justify-center align-center items-center">
                        <h2 className="card-title text-2xl font-bold">Robert Trujillo</h2>
                        <p className='font-bold flex gap-2'>Price: <img className='w-8 h-8 ' src="../public/cash.png" alt="" /> </p>
                        <p className='font-bold'>Duration: 3 hours</p>
                        <p className='font-bold'>#paris #france #europe</p>
                        <div className="card-actions flex justify-center items-center">
                            <button className="btn btn-primary w-full sm:w-full" onClick={handleToggleComment}>Comments</button>
                            {showComment ?
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body flex justify-center items-center">
                                        <p>"Amazing Place!"</p>
                                        <p className='text-xl font-bold'>RobertTrujillo</p>
                                    </div>
                                    <div className="card-body flex justify-center items-center">
                                        <p>"Lovely!"</p>
                                        <p className='text-xl font-bold'>Lars Ulrich</p>
                                    </div>
                                    <div className="card-body flex justify-center items-center">
                                        <p>"Beautiful city!"</p>
                                        <p className='text-xl font-bold'>Kirk Hammett</p>
                                    </div>
                                </div>



                                :null}
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default ItineraryCard