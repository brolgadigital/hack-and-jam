import React, { useState } from 'react'
import ReactModal from 'react-modal'
// import LogIn from './auth/LogIn'
// import SignUp from './auth/SignUp'

const modalStyles = {
    overlay: { //exterior styles
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: { //interior styles
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
    },
}

const GuestNav = () => {
    const [modalLogIn, setLogIn] = useState(false)
    const [modalSignUp, setSignUp] = useState(false)

    function openLogIn() {
        setLogIn(true)
    }
    function openSignUp() {
        setSignUp(true)
    }
    
    function afterOpenModal() {}
    
    function closeModal() {
        setLogIn(false)
        setSignUp(false)
    }

    return (
        <>
            <ul className='user-links'>
                <li><p onClick={openSignUp}>Sign Up</p></li>
                <li><p onClick={openLogIn}>Log In</p></li>
            </ul>

            <ReactModal
                isOpen={modalLogIn}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Log In"
            >
                <h2>Log In Form</h2>
            </ReactModal>

            <ReactModal
                isOpen={modalSignUp}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Log In"
            >
                <h2>Sign Up Form</h2>
            </ReactModal>
        </>
    )
}
export default GuestNav