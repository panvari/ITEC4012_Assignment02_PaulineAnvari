import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Navbar} from './components/navbar';
import {HomePage} from './components/pages/browse/index';
import {SettingsPage} from './components/pages/settings/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/new'>
            <SettingsPage></SettingsPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
