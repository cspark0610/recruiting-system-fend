/* Components */
import { Home } from './pages/Home'
import { Thanks } from './pages/Thanks';
/* Router DOM */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/thanks'>
                    <Thanks />
                </Route>
            </Switch>
        </Router>
    )
}
