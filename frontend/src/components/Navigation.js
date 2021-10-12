import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../haj-logo-white.png'

import '../styles/navigation.scss'

const Navigation = () => {
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
                <ul className='user-links'>
                    <li><a>Notifications</a></li>
                    <li><a>User</a></li>
                    <li><a>Options</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
