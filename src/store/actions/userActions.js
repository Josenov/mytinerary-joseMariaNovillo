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
            localStorage.setItem('token',(data.response.token))
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



    


export const userToken = createAction('userToken', (user) =>{
    return {
        payload:{
            user
        }
    }

})

export const userSignOut = createAction('reset', ()=>{

    localStorage.removeItem('token')
    
    return {
        payload:{
            payload:null
        }
    }
})