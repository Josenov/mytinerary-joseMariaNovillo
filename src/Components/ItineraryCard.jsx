import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UnderConstructionPage from './UnderConstructionPage';
import { useDispatch, useSelector } from 'react-redux';
import { loadItineraryAsync } from '../store/actions/itineraryActions';
import axios from 'axios'

const ItineraryCard = ( ) => {

    let { id } = useParams();

    const itineraryStore = useSelector(store => store.itineraries.itinerary)
    console.log(itineraryStore)

    axios ('http://localhost:7000/api/itineraries') .then(response => console.log(response))

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadItineraryAsync(id))
    }, [])



    const [showComment, setShowComment] = useState(false);

    const handleToggleComment = () => {
        setShowComment(!showComment)
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="card w-1/3 glass bg-gray-300 m-4 sm:w-1/2">
                <h1 className='text-4xl font-bold text-center m-4'>Itineraries</h1>
                    <figure><img className='rounded-full' src="https://randomuser.me/api/portraits/men/23.jpg" alt="user" /></figure>
                    <div className="card-body flex justify-center align-center items-center">
                        <h2 className="card-title text-2xl font-bold">{itineraryStore[0]?.user.name}</h2>
                        <p className='font-bold flex items-center gap-2'>Price: {itineraryStore[0]?.price} <img className='w-8 h-8 ' src="../public/cash.png" alt="" /></p>
                        <p className='font-bold'>Duration: {itineraryStore[0]?.duration} hs.</p>
                        <p className='font-bold flex items-center'><svg width="34px" height="34px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336" /></svg> {itineraryStore[0]?.likes}</p>
                        <p className='font-bold'>Comments: {itineraryStore[0]?.comments.comment}</p>
                        <p className='font-bold'>Hashtags:{itineraryStore[0]?.hashtags}</p>
                        <div className="card-actions flex justify-center items-center">
                            <button className="btn btn-primary w-full" onClick={handleToggleComment}>{!showComment ? 'Comments' : 'Hide Comments'}</button>
                            {showComment ?
                                    <div className="card w-96 bg-base-100 shadow-xl flex justify-center items-center">
                                    <div className="card-body flex justify-center items-center">
                                        
                                        <UnderConstructionPage />
                                        
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

export default ItineraryCard;