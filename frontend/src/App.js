import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Activity from './screens/Activity'
import Browse from './screens/Browse'
import Forum from './screens/Forum'
import Jams from './screens/Jams'

function App() {
    return (
        <div className='App'>
            <Router>
                <Navigation />

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