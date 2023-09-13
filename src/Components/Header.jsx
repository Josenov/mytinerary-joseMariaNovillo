import React from 'react'
import { useSelector } from 'react-redux'
import {Link as LinkRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userSignOut } from '../store/actions/userActions'



const Header = () => {
    const user = useSelector(store => store.user.user)
    console.log(user)
    const defaultImage = 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
    console.log(defaultImage)

    const dispatch = useDispatch()

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="./public/logotravel.png" className='w-16 h-16' alt="" />  
                    <LinkRouter to='/' className="font-bold text-2xl">MyTinerary</LinkRouter>
    
                </div>
                <div>
                    <div >
                        <LinkRouter to='/' className="m-2 font-bold text-lg" >Home</LinkRouter>
                        <LinkRouter to='/cities' className="m-2 font-bold text-lg" >Cities</LinkRouter>
                    </div>
                    <LinkRouter to='/login' className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full">
                                <img src={user ? user.image : defaultImage} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {user ? <li><a className='font-bold text-l' onClick={()=>dispatch(userSignOut())} >Sign Out</a></li> : null }
                        </ul>
                    </LinkRouter>
                </div>
            </div>
        </>
    )
}

export default Header