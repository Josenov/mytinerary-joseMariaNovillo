import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



export const loadItinerariesAsync = createAsyncThunk ('load_itineraries_async', async () =>{

    try {
        const peticion = await axios ('http://localhost:7000/api/itineraries')

        return peticion.data.getItineraries
        
    } catch (error) {
        console.log(error)
    }

    
})


export const loadItineraryAsync = createAsyncThunk ('load_itinerary_async', async (id) =>{

    try {
        const peticion = await axios (`http://localhost:7000/api/itineraries?cityId=${id}`)

        return peticion.data.getItineraries
        
    } catch (error) {
        
    }

    

})

