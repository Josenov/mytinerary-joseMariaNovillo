import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UnderConstructionPage from '../Components/UnderConstructionPage'
import { Link as LinkRouter } from 'react-router-dom'
import ItineraryCard from '../Components/ItineraryCard'
import { useDispatch, useSelector } from 'react-redux'
import { loadCityAsync } from '../store/actions/citiesActions'

const CityDetails = () => {

    let { id } = useParams();

    const dispatch = useDispatch()
    const city = useSelector(store => store.cities.city)
    console.log(city)

    //axios (`http://localhost:7000/api/cities/${id}`) .then (response => console.log(response))

    /* const [cities, setCities] = useState(); */

    useEffect(() => {

        dispatch (loadCityAsync(id))



        /* axios.get(`http://localhost:7000/api/cities/${id}`)
            .then(response => setCities(response.data.city))
            .catch(err => console.log(err)) */

    }, [])


    return (
        <>
            {/* <h2 className='text-3xl'>City Details:{id}</h2> */}
            <LinkRouter to='/cities'>
                <button className="btn btn-primary bg-blue-900 m-4">Back to Cities</button>
            </LinkRouter>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl font-bold justify-center items-center text-center'>{city?.city}</h2>
                <h3 className='text-xl font-bold justify-center items-center text-center m-4'>{city?.country}</h3>
                <img className='w-1/2 flex justify-center items-center align-center m-4' src={city?.url} alt="" />
            </div>


            <ItineraryCard/>

        </>
    )
}

export default CityDetails