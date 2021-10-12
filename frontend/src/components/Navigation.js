import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserAuth from '../context/UserAuth'

import logo from '../haj-logo-white.png'

import '../styles/navigation.scss'



const Navigation = () => {
    const auth = useContext(UserAuth)
    
    return (
        <nav>
            <div className='wrapper'>
                <ul className='page-links'>
                    <li><Link to='/'><img src={logo} /></Link></li>
                    <li><Link to='/browse'>Browse</Link></li>
                    <li><Link to='/jams'>Jams</Link></li>
                    <li><Link to='/activity'>Activity</Link></li>
                    <li><Link to='/forum'>Chat</Link></li>
                </ul>
                {auth.auth ? <UserNav /> : <GuestNav />}
            </div>
        </nav>
    )
}

export default Navigation

const UserNav = () => {
    return (
        <ul className='user-links'>
            <li><a>Notifications</a></li>
            <li><a>User</a></li>
            <li><a>Options</a></li>
        </ul>
    )
}

const GuestNav = () => {
    return (
        <ul className='user-links'>
            <li><a>Sign Up</a></li>
            <li><a>Log In</a></li>
        </ul>
    )
}
