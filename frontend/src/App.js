import React, { useState, useMemo, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './screens/Activity'
import Browse from './screens/Browse'
import Forum from './screens/Forum'
import Jams from './screens/Jams'
import { AuthProvider } from './context/UserAuth'

import './App.scss'

function App() {
    const [auth, setAuth] = useState({})

    const checkAuth = async () => {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'GET',
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setAuth(data.auth)
    }

    useEffect(() => {checkAuth()}, [])

    const userAuth = useMemo(
        () => ({ auth, setAuth }), 
        [auth]
    )

    return (
        <div className='App'>
            <Router>
                <AuthProvider value={userAuth}>
                    <Navigation />
                </AuthProvider>

                <Switch>
                    <Route path="/browse">
                        <Browse />
                    </Route>
                    <Route path="/jams">
                        <Jams />
                    </Route>
                    <Route path="/activity">
                        <Activity />
                    </Route>
                    <Route path="/forum">
                        <Forum />
                    </Route>
                    <Route path="/">
                        <Browse />
                    </Route>
                </Switch>

                <Footer />

            </Router>
        </div>
    )
}

export default App