import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'

const Link = [
    {title:'home', to:'/'},
    {title:'cities', to:'/cities'},
    

]

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="./public/logotravel.png" className='w-16 h-16' alt="" />  
                    <a className="font-bold text-2xl">MyTinerary</a>
    
                </div>
                <div>
                    <div >
                        <a className="m-2 font-bold text-lg" href="/">Home</a>
                        <a className="m-2 font-bold text-lg" href="/cities">Cities</a>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="./public/userprofile.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header