import { createReducer } from "@reduxjs/toolkit";
import { userLogin, userPhoto } from "../actions/userActions.js";


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
    
    
    )

export default userReducer;