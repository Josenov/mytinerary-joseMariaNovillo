import { configureStore } from "@reduxjs/toolkit";
import {citiesReducer} from '../store/reducers/citiesReducers.js'

export const store = configureStore ({
    reducer: {
        cities : citiesReducer,

    }
})

