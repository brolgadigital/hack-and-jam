import React from 'react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './screens/Activity'
import Browse from './screens/Browse'
import Forum from './screens/Forum'
import Jams from './screens/Jams'
import { AuthProvider } from './context/UserAuth'

// const UserAuth = React.createContext(false)

function App() {
    //Check Authorisation & set state context
    const auth = {auth:true}

    return (
        <div className='App'>
            <Router>
                <AuthProvider value={auth}>
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

            </Router>
        </div>
    )
}

export default App