/* Components */
import { Home } from './pages/Link_1/Home'
import { Thanks } from './pages/Link_1/Thanks';
import { Welcome } from './pages/Link_2/Welcome';
import { Data } from './pages/Link_2/Data';
/* Router DOM */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                <Route path='/welcome'>
                    <Welcome />
                </Route>
                <Route path='/data'>
                    <Data />
                </Route>
            </Switch>
        </Router>
    )
}
