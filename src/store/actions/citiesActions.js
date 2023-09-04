
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


/* export const loadCities = createAction ( 'load_cities', (cities) => {
    return {
        payload:cities
    }
}) */

export const loadCitiesAsync = createAsyncThunk ('load_cities_async', async () =>{

    try {
        const peticion = await axios ('http://localhost:7000/api/cities')

        return peticion.data.cities
        
    } catch (error) {
        console.log(error)
    }

    
})


export const loadCityAsync = createAsyncThunk ('load_city_async', async (id) =>{

    try {
        const peticion = await axios (`http://localhost:7000/api/cities/${id}`)

        return peticion.data.city
        
    } catch (error) {
        
    }

    

})




export const filterCities = createAction ( 'filter_cities', (inputValue) => {
    return {
        payload:inputValue
    }
})