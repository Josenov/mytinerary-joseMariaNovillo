import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import UnderConstructionPage from '../Components/UnderConstructionPage'

const CityDetails = () => {

    const{id}=useParams();

    useEffect(()=>{
        axios.get('http://localhost:7000/api/cities?city=')
            .then(response => setCities(response.data.cities.id))
            .catch(err => console.log(err))

    }, [])

    return (
    <>
        <h2 className='text-3xl'>City Details:{id}</h2>
        <UnderConstructionPage />


    </>
    )
}

export default CityDetails