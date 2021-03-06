import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {lazy,Suspense,useContext} from 'react'
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/user'


const Login=lazy(()=>import('./pages/login'))
const SignUp=lazy(()=>import('./pages/signup'))
const NotFound=lazy(()=>import('./pages/not-found'))
const Dashboard=lazy(()=>import('./pages/dashboard'))
function App() {
  const user=useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<h1>Loading Data</h1>}>
          <Switch>
              <Route path={ROUTES.LOGIN} exact component={Login}/>
              <Route path={ROUTES.SIGN_UP} exact component={SignUp}/>
              <Route path={ROUTES.DASHBOARD} exact component={Dashboard}/>
              <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
