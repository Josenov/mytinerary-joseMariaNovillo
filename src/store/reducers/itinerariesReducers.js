import {createReducer} from "@reduxjs/toolkit"
import { loadItinerariesAsync, loadItineraryAsync } from "../actions/itineraryActions" 

const initialState = {
    itineraries : [],
    itinerary : []
}

export const itinerariesReducer =  createReducer (initialState, (builder) =>
    builder
        

        .addCase ( loadItinerariesAsync.fulfilled, (actualState, action) => {
            
            return {
                ...actualState,
                itineraries : action.payload,
                
            }
        } )

        .addCase (loadItineraryAsync.fulfilled, (actualState, action) =>{
            return {
                ...actualState,
                itinerary: action.payload
            }
        })

        
            
        
)