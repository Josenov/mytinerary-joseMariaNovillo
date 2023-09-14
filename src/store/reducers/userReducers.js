import { createReducer } from "@reduxjs/toolkit";
import { userLogin, userPhoto, userToken, userSignOut, userLoginGoogle, userSignUp } from "../actions/userActions.js";



const initialState = {
    image:null,
    user:null,
    token:null

}



const userReducer = createReducer (initialState, 
    (builder) => builder
        .addCase(userPhoto, (state,action)=>{
            return {
                ...state,
                image:action.payload.image
                
            }
        })

        .addCase(userLogin.fulfilled,(state, action)=>{

            return{
                ...state,
                user: action.payload.user,
                token:action.payload.token
            }

        })

        .addCase(userLoginGoogle.fulfilled,(state, action)=>{

            return{
                ...state,
                user: action.payload.user,
                token:action.payload.token
            }

        })

        .addCase(userSignUp.fulfilled,(state, action)=>{

            return{
                ...state,
                user: action.payload.user,
                token:action.payload.token
            }

        })


        
        .addCase(userSignOut,(state, action)=>{

            return {
                ...state,
                user:null,
                token:null
            }

        })


        .addCase(userToken,(state, action)=>{

            return{
                ...state,
                user: action.payload.user
                
            }

        })
    
    
    )

export default userReducer;