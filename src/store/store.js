import { configureStore } from "@reduxjs/toolkit";
import {citiesReducer} from '../store/reducers/citiesReducers.js'
import { itinerariesReducer } from "./reducers/itinerariesReducers.js";


export const store = configureStore ({
    reducer: {
        cities : citiesReducer,
        itineraries: itinerariesReducer,
        

    }
})

