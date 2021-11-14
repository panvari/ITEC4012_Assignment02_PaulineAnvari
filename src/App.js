import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import page components
import {HomePage} from './components/pages/browse/index';
import {SignInPage} from './components/pages/sign-in/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        {/*set route for homepage and to use homepage component*/}
          <Route exact path='/'> 
            <HomePage></HomePage>
          </Route>
          {/*set route for sign in page and to use sign in page component*/}
          <Route path='/sign-in'>
            <SignInPage></SignInPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
