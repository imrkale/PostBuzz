import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {lazy,Suspense,useContext} from 'react'
import * as ROUTES from './constants/routes';
import FirebaseContext from './context/firebase';

const Login=lazy(()=>import('./pages/login'))
const SignUp=lazy(()=>import('./pages/signup'))
const NotFound=lazy(()=>import('./pages/not-found'))
function App() {
  const firebase  = useContext(FirebaseContext);
  console.log(firebase)
  return (
    <Router>
      <Suspense fallback={<h1>Loading Data</h1>}>
        <Switch>
            <Route path={ROUTES.LOGIN} component={Login}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
