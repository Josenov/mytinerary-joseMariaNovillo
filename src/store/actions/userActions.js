import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

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

            Swal.fire({
                title: 'Welcome!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Ok'
            })


        return {
            user:data.response.user,
            token:data.response.token

        }
        
    } catch (error) {
        console.log('User Action', error)
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        return{
            user:null
        }
    }
    
})


export const userLoginGoogle = createAsyncThunk ('userLoginGoogle', async (obj) =>{

    try {

        const {data} = await axios.post('http://localhost:7000/api/auth/google', obj.data)
            console.log(data)
            localStorage.setItem('token',(data.response.token))
            localStorage.setItem('user', JSON.stringify(data.response.user))

            Swal.fire({
                title: 'Welcome!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Ok'
            })

        return {
            user:data.response.user,
            token:data.response.token

        }
        
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        
    }
    
})



export const userSignUp = createAsyncThunk ('userSignUp', async (body) =>{

    try {
        const response = await axios.post('http://localhost:7000/api/auth/signup', body)
        
        localStorage.setItem('token', response.data.token)
        //localStorage.setItem('user', JSON.stringify(response.data.user))
        Swal.fire({
            title: 'Welcome!',
            text: response.message,
            icon: 'success',
            confirmButtonText: 'Ok'
        })

        return response.data
        
        
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: error.response.message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
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