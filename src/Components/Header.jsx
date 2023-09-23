import React from 'react'
import { useSelector } from 'react-redux'
import {Link as LinkRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userSignOut } from '../store/actions/userActions'



const Header = () => {
    const user = useSelector(store => store.user.user)
    //console.log(user)
    const defaultImage = 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'
    //console.log(defaultImage)

    const dispatch = useDispatch()

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="./public/logotravel.png" className='w-8 h-8 lg:w-16 lg:h-16' alt="" />  
                    <LinkRouter to='/' className="font-bold xl:text-2xl text-md">MyTinerary</LinkRouter>
    
                </div>
                <div>
                    <div >
                        <LinkRouter to='/' className="m-1 font-semibold lg:text-lg text-sm" >Home</LinkRouter>
                        <LinkRouter to='/cities' className="m-1 font-semibold lg:text-lg text-sm" >Cities</LinkRouter>
                    </div>
                    <LinkRouter to='/login' className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-8 h-8 lg:w-12 lg:h-12">
                            <div className="w-16 rounded-full">
                                <img src={user ? user.image : defaultImage} />
                            </div>
                        </label>
                        <ul tabIndex={0} >
                            {user ? <li><a className='flex justify-center font-bold text-l text-center  shadow menu menu-sm dropdown-content bg-base-100 hover:bg-base-300 rounded-box w-32' onClick={()=>dispatch(userSignOut())} >Sign Out</a></li> : null }
                        </ul>
                    </LinkRouter>
                </div>
            </div>
        </>
    )
}

export default Header