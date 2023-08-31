import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UnderConstructionPage from '../Components/UnderConstructionPage'
import { Link as LinkRouter } from 'react-router-dom'
import ItineraryCard from '../Components/ItineraryCard'

const CityDetails = () => {

    let { id } = useParams();

    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get(`http://localhost:7000/api/cities/${id}`)
            .then(response => setCities(response.data.city))
            .catch(err => console.log(err))

    }, [])


    return (
        <>
            {/* <h2 className='text-3xl'>City Details:{id}</h2> */}
            <LinkRouter to='/cities'>
                <button className="btn btn-primary bg-blue-900 m-4">Back to Cities</button>
            </LinkRouter>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl font-bold justify-center items-center text-center'>{cities?.city}</h2>
                <h3 className='text-xl font-bold justify-center items-center text-center m-4'>{cities?.country}</h3>
                <img className='w-1/2 flex justify-center items-center align-center m-4' src={cities?.url} alt="" />
            </div>


            <ItineraryCard/>


        </>
    )
}

export default CityDetails