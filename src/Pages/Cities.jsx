import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import {Link as LinkRouter} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { getAllCities } from '../services/cityService';
import { filterCities, loadCitiesAsync } from '../store/actions/citiesActions';

const Cities = () => {

  /* const [cities, setCities] = useState(); */

  let inputSearch = useRef(null);

  //console.log(inputSearch)



  const citiesStore = useSelector(store => store.cities)
  //console.log('store: ', citiesStore)

  

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch (loadCitiesAsync());
    /* getAllCities().then((cities) => { 
      setCities(cities);  
    dispatch (loadCities(cities));
    }); */
    /* getAllCities().then((cities) => { 
      setCities(cities);
    ;
    }); */

  }, [])
  

    /* axios.get('http://localhost:7000/api/cities?city=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []); */






  const handleSearch = async (event) => {
    
    const searchCity = inputSearch.current.value.trim();

    /* console.log(searchCity)

    citiesStore.allCities.filter(city =>city.name.toLowerCase().includes(searchCity.toLowerCase())) */

    dispatch(filterCities(searchCity))
    
    /* try {
      const response = await axios.get(`http://localhost:7000/api/cities?city=${name}`)
      setCities(response.data.cities)
    } catch (error) {
      if(error.response.status === 404){
        setCities([]);

      } else {
        console.log(error)

      } */
      
    }


  return (
    <>
      <div>
        <h1 className="text-7xl font-bold text-black text-center flex justify-center">Cities</h1>
        <h2 className="text-2xl font-bold text-blue-400 text-center flex justify-center">Collection of the most beautiful places and experience!</h2>
      </div>
      <div className='flex justify-center items-center'>  
        <input ref={inputSearch} type="text" placeholder="Search your city here" className="input input-bordered input-primary w-full max-w-xs m-6 p-3" />
        <button onClick={handleSearch} className="btn btn-outline btn-primary">Search</button>  
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        {
          citiesStore.filteredCities?.length > 0 ?
          citiesStore.filteredCities?.map((city) => {
            return (
              <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl m-4">
                <figure><img src={city.url} alt={city.city} /></figure>
                <div className="card-body">
                  <h2 className="card-title text-4xl font-bold">{city.city}<svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg></h2>
                  <p className='text-2xl font-semibold'>{city.country}</p>
                  <div className="card-actions justify-end">
                    <LinkRouter key={city._id} to={`/cities/${city._id}`}>
                    <button className="btn btn-primary bg-blue-900">More Details</button>
                    </LinkRouter>
                  </div>
                </div>
              </div>
            )
          })
          : <h2 className="text-2xl font-bold text-blue-400 text-center flex justify-center m-4">The city that you are looking for was not found! Try again</h2>
          } 
          
      </div> 

    </>

  )
}

export default Cities