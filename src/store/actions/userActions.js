import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const userPhoto = createAction('userPhoto', (obj) =>{
    return {
        payload: obj.photo
    }
})

export const userLogin = createAsyncThunk ('userLogin', async (obj) =>{

    try {

        const {data} = await axios.post('http://localhost:7000/api/auth/signin', obj.data)
            console.log(data)
            localStorage.setItem('token', JSON.stringify(data.response.token))
            localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user:data.response.user,
            token:data.response.token

        }
        
    } catch (error) {
        console.log(error)
        return{
            user:null
        }
    }
    
})