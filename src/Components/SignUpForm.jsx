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
        //console.log(e);
        const body = {
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            image:image.current.value,
            country:country.current.value,

        }

        console.log(body)
        dispatch(userSignUp(body))
    }

    return (
        <>
            <section className="bg-gray-200">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex justify-center mx-auto">
                            <img className="w-16 h-16" src="../public/logotravel.png" alt=""/>
                        </div>

                        <div className="flex items-center justify-center mt-6">

                            <a href="#" className="w-1/3 pb-4 text-3xl font-bold text-center text-gray-800 capitalize border-b-2 border-blue-500 ">
                                sign up
                            </a>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input required ref={name} type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  0 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name"/>
                        </div>

                        

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input required ref={email} type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input required ref={password} type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"  />
                                </svg>
                            </span>

                            <input required ref={image} type="text" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Image URL"/>
                        </div>

                        

                        <div className=" flex items-center mt-4">
                            <label className=" w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 flex justify-center">
                                Country: 

                                <select required name="country" id="" ref={country} >
                                    {countries.length > 0 && countries.map(country => <option   key={`option_country_${country}`}  value={country.common}>{country}</option>)}
                                </select>

                            </label>

                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>

                            <div className="mt-6 text-center ">
                                <LinkRouter to='/login' href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
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