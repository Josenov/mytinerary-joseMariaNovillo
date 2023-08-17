import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cities = () => {

  const [cities, setCities] = useState();

  useEffect(() => {
    axios.get('http://localhost:7000/api/cities?city=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleInputChange = async (event) => {

    try {
      const response = await axios.get(`http://localhost:7000/api/cities?city=${event.target.value}`)
      setCities(response.data.cities)
    } catch (error) {
      console.log(error)
    }



  }

  return (
    <>
      <div>
        <h1 className="text-7xl font-bold text-black text-center flex justify-center">Cities</h1>
        <h2 className="text-2xl font-bold text-blue-400 text-center flex justify-center">Collection of the most beautiful places and experience!</h2>
      </div>
      <div className='flex justify-center items-center'>
        <input onChange={handleInputChange} type="text" placeholder="Search your city here" className="input input-bordered input-primary w-full max-w-xs m-6 p-3" />
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        {

          cities?.map((city) => {
            return (
              <div key={city._id} className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4">
                <figure><img src={city.url} alt={city.city} /></figure>
                <div className="card-body">
                  <h2 className="card-title text-4xl font-bold">{city.city}<svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg></h2>
                  <p className='text-2xl font-semibold'>{city.country}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-blue-900">More Details</button>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>

    </>

  )
}

export default Cities