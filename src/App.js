import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {lazy,Suspense} from 'react'
import * as ROUTES from './constants/routes';
const Login=lazy(()=>import('./pages/login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading Data</h1>}>
        <Switch>
            <Route path={ROUTES.LOGIN} component={Login}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
