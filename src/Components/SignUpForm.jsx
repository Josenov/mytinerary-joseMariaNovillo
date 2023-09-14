import React, { useEffect, useState, useRef } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userSignUp } from '../store/actions/userActions'



const SignUpForm = () => {

    const [countries, setCountries] =   useState([])

    const dispatch = useDispatch()



    const name = useRef(null)
    const email = useRef(null)
    const password= useRef(null)
    const image = useRef(null)
    const country = useRef(null)

    useEffect(()=>{
        axios('https://restcountries.com/v3.1/all?fields=name').then(({data}) =>
        setCountries(data.map(country => country.name.common)))
        

    }, [])

    countries.sort()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const body = {
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            image:image.current.value,
            country:country.current.value,

        }
        dispatch(userSignUp(body))
    }

    return (
        <>
            <section class="bg-gray-200">
                <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSubmit} class="w-full max-w-md">
                        <div class="flex justify-center mx-auto">
                            <img class="w-16 h-16" src="../public/logotravel.png" alt=""/>
                        </div>

                        <div class="flex items-center justify-center mt-6">

                            <a href="#" class="w-1/3 pb-4 text-3xl font-bold text-center text-gray-800 capitalize border-b-2 border-blue-500 ">
                                sign up
                            </a>
                        </div>

                        <div class="relative flex items-center mt-8">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input required ref={name} type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  0 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name"/>
                        </div>

                        

                        <div class="relative flex items-center mt-6">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input required ref={email} type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                        </div>

                        <div class="relative flex items-center mt-4">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input required ref={password} type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                        </div>

                        <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>

                            <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                            <input required ref={image} id="dropzone-file" type="file" class="hidden" />
                        </label>

                        <div class=" flex items-center mt-4">
                            <label className=" w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 flex justify-center">
                                Country: 

                                <select required name="country" id="" ref={country} >
                                    {countries.length > 0 && countries.map(country => <option   key={`option_country_${country}`}  value={country.common}>{country}</option>)}
                                </select>

                            </label>

                        </div>

                        <div class="mt-6">
                            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>

                            <div class="mt-6 text-center ">
                                <LinkRouter to='/login' href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </LinkRouter>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUpForm