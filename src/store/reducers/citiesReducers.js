import {createReducer} from "@reduxjs/toolkit"
import { filterCities, loadCitiesAsync, loadCityAsync} from '../actions/citiesActions'

const initialState = {
    allCities : [],
    filteredCities : [],
    city:null
}

export const citiesReducer =  createReducer (initialState, (builder) =>
    builder
        /* .addCase( loadCities, (actualState, action) =>{
            return {

            ...actualState,
            allCities : action.payload,
            filteredCities : action.payload
        }
            
        }) */
        .addCase( filterCities, (actualState, action) =>{
            const cityFiltered =  actualState.allCities.filter(cities => cities.city.toLowerCase().includes(action.payload))
            let newFilteredCities = cityFiltered
            
            return {
            ...actualState,
            filteredCities : newFilteredCities
            
        }

        })

        .addCase ( loadCitiesAsync.fulfilled, (actualState, action) => {
            
            return {
                ...actualState,
                allCities : action.payload,
                filteredCities: action.payload
            }
        } )

        .addCase (loadCityAsync.fulfilled, (actualState, action) =>{
            return {
                ...actualState,
                city: action.payload
            }
        })

        
            
        
)