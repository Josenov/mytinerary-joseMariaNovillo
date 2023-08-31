import {createReducer} from "@reduxjs/toolkit"
import {loadCities, filterCities} from '../actions/citiesActions'

const initialState = {
    allCities : [],
    filteredCities : []
}

export const citiesReducer =  createReducer (initialState, (builder) =>
    builder
        .addCase( loadCities, (actualState, action) =>{
            return {

            ...actualState,
            allCities : action.payload,
            filteredCities : action.payload
        }
            
        })
        .addCase( filterCities, (actualState, action) =>{
            const cityFiltered =  actualState.allCities.filter(cities => cities.city.toLowerCase().includes(action.payload))
            let newFilteredCities = cityFiltered
            
            return {
            ...actualState,
            filteredCities : newFilteredCities
            
        }

        })
            
        
)