import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { userLoginGoogle } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';



const GoogleButton = () => {

    const dispatch = useDispatch();

    const googleButton = useRef();

    const handleCredentialResponse = async (response) =>{
        //console.log("Encoded JWT ID token: " + response.credential);

        const data = {
            token_id:response.credential
        }

        try {
            dispatch(userLoginGoogle({
                data:data
            }))

        } catch (error) {
            console.log(error)
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data)
        console.log(userResponse)
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "896740784294-g3i334lv074ucmrq86rjsmut6kgl0rcv.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }
            );
            
        }
    }, [])

    return (
        <div ref={googleButton}>GoogleButton</div>
    )
}

export default GoogleButton