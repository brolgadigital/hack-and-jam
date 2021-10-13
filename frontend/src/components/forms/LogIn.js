import React, { useState, useContext } from 'react'
import UserAuth from '../../context/UserAuth'

const LogIn = () => {
    const { auth, setAuth } = useContext(UserAuth)

    const [ user, setUser ] = useState({
        username: '',
        password: ''
    })

    const logIn = async (e) => {
        e.preventDefault()
        if(user.username && user.password){
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include'
            })
            console.log(response)
            const data = await response.json()
            setAuth(data.auth)
        }
    }

    const inputHandler = (e) =>{
        setUser( {...user, [e.target.name]: e.target.value} )
    }

    return (
        <>
            <h1>Welcome Back!</h1>

            <form onSubmit={logIn}>
                <div>
                    <label name='username'>username</label>
                    <input required type='text' name='username' id='username' placeholder='username' onChange={inputHandler} value={user.username} ></input>
                </div>
                <div>
                    <label name='password'>password</label>
                    <input required type='password' name='password' id='password' placeholder='password' onChange={inputHandler} value={user.password} ></input>
                </div>
                <button name='log in' type='submit' >log in</button>
            </form>
        </>
    )
}

export default LogIn
