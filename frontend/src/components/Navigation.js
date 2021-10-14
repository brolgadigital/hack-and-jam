import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/UserAuth'
import GuestNav from './GuestNav'

import logo from '../assets/haj-logo-white.png'

import '../styles/navigation.scss'

const Navigation = () => {
    const [state, setState] = useContext(UserAuth)

    const checkAuth = async () => {
        const response = await fetch('http://localhost:5000/auth/', {
            method: 'GET',
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setState(state => ({...state, auth:data.auth, usr: data.usr}))
    }

    useEffect(() => {
        checkAuth()
        // eslint-disable-next-line
    }, [])

    return (
        <nav>
            <div className='wrapper'>
                <ul className='page-links'>
                    <li><Link to='/'><img src={ logo } alt='Hack and Jam'/></Link></li>
                    <li><Link to='/browse'>Browse</Link></li>
                    <li><Link to='/jams'>Jams</Link></li>
                    <li><Link to='/activity'>Activity</Link></li>
                    <li><Link to='/forum'>Chat</Link></li>
                </ul>
                { state.auth ? <UserNav /> : <GuestNav /> }
            </div>
        </nav>
    )
}

export default Navigation

const UserNav = () => {
    const [state, setState] = useContext(UserAuth)

    const logOut = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/auth/logout', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include'
        })
        const data = await response.json()
        setState(state => ({...state, auth:data.auth, usr: data.usr}))
    }

    return (
        <ul className='user-links'>
            <li><a href='/'>Notifications</a></li>
            <li><a href='/'>{ state.usr }</a></li>
            <li><a href='/' onClick={logOut}>Log Out</a></li>
        </ul>
    )
}
