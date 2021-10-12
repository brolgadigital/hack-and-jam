import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserAuth from '../context/UserAuth'

import logo from '../assets/haj-logo-white.png'

import '../styles/navigation.scss'



const Navigation = () => {
    const auth = useContext(UserAuth)
    
    return (
        <nav>
            <div className='wrapper'>
                <ul className='page-links'>
                    <li><Link to='/'><img src={logo} alt='Hack and Jam'/></Link></li>
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
            <li><a href='/'>Notifications</a></li>
            <li><a href='/'>User</a></li>
            <li><a href='/'>Options</a></li>
        </ul>
    )
}

const GuestNav = () => {
    return (
        <ul className='user-links'>
            <li><a href='/'>Sign Up</a></li>
            <li><a href='/'>Log In</a></li>
        </ul>
    )
}
