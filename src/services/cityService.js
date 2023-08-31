import axios from 'axios'

const citiesQueries = axios.create( {
    baseURL: 'http://localhost:7000/api/cities?city=',
} )

export const getAllCities = async (queryParams="") => {
    try {
        const response = await citiesQueries(queryParams)
        return response.data.cities
    } catch (error) {
        return []
    }
}