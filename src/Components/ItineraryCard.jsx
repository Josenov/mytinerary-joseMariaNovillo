import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UnderConstructionPage from './UnderConstructionPage';
import { useDispatch, useSelector } from 'react-redux';
import { loadItineraryAsync } from '../store/actions/itineraryActions';
import axios from 'axios'

const ItineraryCard = () => {


    const defaultImage  = 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'




    let { id } = useParams();

    const itineraryStore = useSelector(store => store.itineraries.itinerary)
    console.log(itineraryStore)
    const itineraryPrice = useSelector(store => store.itineraries.itinerary[0]?.price)
    //console.log(itineraryPrice)

    const dollarPrice = (
        <img className='h-6 w-6' src='../public/cash.png' />
    );

    const priceArray = [];
    
    /* if (itineraryStore[0]?.price >= 1 && itineraryStore[0]?.price <= 5) {
        for (let i = 0; i <itineraryStore[0]?.price; i++) {
            svgArray.push(
                <span key={i}>
                    {svgMarkup}
                </span>
            );
        }
    }  */

    //
        if (itineraryPrice >= 1 && itineraryPrice <= 5) {
            for (let i = 0; i <itineraryPrice; i++) {
                priceArray.push(
                    <span key={i}>
                        {dollarPrice}
                    </span>
                );
            }
        }
    //}

    //axios ('http://localhost:7000/api/itineraries') .then(response => console.log(response))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItineraryAsync(id))
    }, [])



    const [showComment, setShowComment] = useState(false);

    const handleToggleComment = () => {
        setShowComment(!showComment)
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="card w-64 glass bg-gray-300 m-4 sm:w-1/2 text-center">
                    <h1 className='text-4xl font-bold text-center m-4'>Itineraries</h1>
                    <figure><img className='rounded-full h-32 w-32 border-solid border-4 border-green-400 bg-cover bg-center ' src={itineraryStore[0]?itineraryStore[0]?.user?.image:defaultImage} alt="user" /></figure>
                    <div className="card-body flex justify-center align-center items-center">
                        <h2 className="card-title text-2xl font-bold">{itineraryStore[0]?.user.name}</h2>
                        <p className='font-bold flex items-center gap-2'>Price:<span className='flex flex-row gap-1'>{priceArray}</span></p>
                        <p className='font-bold'>Duration: {itineraryStore[0]?.duration} hs.</p>
                        <p className='font-bold flex items-center'><svg width="34px" height="34px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336" /></svg> {itineraryStore[0]?.likes}</p>
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



                                : null}
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default ItineraryCard;