import React, { useState } from 'react'

const SignUp = () => {
    const [ user, setUser ] = useState({
        username: '',
        email: '',
        password: ''
    })

    const addUser = async (e) => {
        e.preventDefault()
        if(user.username && user.email && user.password) {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include'
            })
        

            const data = await response.json()
            console.log(data)
            //load log in modal
        }
    }

    const inputHandler = (e) =>{
        setUser( {...user, [e.target.name]: e.target.value} )
    }

    return (
        <>
            <h1>Welcome New User!</h1>

            <form onSubmit={addUser}>
                <div>
                    <label name='username'>username</label>
                    <input required name='username' id='username' placeholder='username' onChange={inputHandler} value={user.username}></input>
                </div>
                <div>
                    <label name='email'>email</label>
                    <input required type='email' name='email' id='email' placeholder='email' onChange={inputHandler} value={user.email}></input>
                </div>
                <div>
                    <label name='password'>password</label>
                    <input required name='password' id='password' placeholder='password' type='password' onChange={inputHandler} value={user.password} ></input>
                </div>
                <button name='sign up' type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp
