import { createAction } from "@reduxjs/toolkit";

export const userPhoto = createAction('userPhoto', (obj) =>{
    return {
        payload: obj.photo
    }
})