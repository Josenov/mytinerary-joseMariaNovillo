import { configureStore } from "@reduxjs/toolkit";
import {citiesReducer} from './reducers/citiesReducers.js'
import { itinerariesReducer } from "./reducers/itinerariesReducers.js";
import userReducer from "./reducers/userReducers.js";




export const store = configureStore ({
    reducer: {
        cities : citiesReducer,
        itineraries: itinerariesReducer,
        user: userReducer
        
        

    }
})

