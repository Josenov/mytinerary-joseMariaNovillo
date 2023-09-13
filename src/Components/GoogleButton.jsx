import React, { useEffect, useRef } from 'react'
import axios from 'axios'

const GoogleButton = () => {

    const googleButton = useRef();

    const handleCredentialResponse = async (response) =>{
        //console.log("Encoded JWT ID token: " + response.credential);

        const data = {
            token_id:response.credential
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data)
        console.log(userResponse)
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "896740784294-g3i334lv074ucmrq86rjsmut6kgl0rcv.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
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