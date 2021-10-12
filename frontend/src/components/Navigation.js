import React from 'react'

import logo from '../haj-logo-white.png'

import '../styles/navigation.scss'

const Navigation = () => {
    return (
        <nav>
            <div className='wrapper'>
                
                <ul className='page-links'>
                    <li><a><img src={logo} /></a></li>
                    <li><a>Browse</a></li>
                    <li><a>Jams</a></li>
                    <li><a>Activity</a></li>
                    <li><a>Chat</a></li>
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
