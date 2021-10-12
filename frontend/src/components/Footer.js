import React from 'react'
// import {Facebook, Twitter, Disc} from 'grommet-icons'
import { Link } from 'react-router-dom'

import logo from '../assets/haj-logo-white.png'

import '../styles/footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='wrapper1'>
                <Link to='/'><img src={logo} alt='Hack and Jam' /></Link>
                <div className='wrapper2'>
                    <ul>
                        <li><a href='https://facebook.com'>facebook</a></li>
                        <li><a href='https://twitter.com'>twitter</a></li>
                        <li><a href='https://discord.com'>discord</a></li>
                        <li><a href='https://github.com'>github</a></li>
                    </ul>
                    <ul>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/faqs'>faq</Link></li>
                        <li><Link to='/blog'>blog</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                    <ul className='legal'>
                        <li>copyright</li>
                        <li><Link to='/sitemap'>directory</Link></li>
                        <li><Link to='/privacy'>privacy</Link></li>
                        <li><Link to='/terms'>terms</Link></li>
                        <li><Link to='/cookies'>cookies</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
