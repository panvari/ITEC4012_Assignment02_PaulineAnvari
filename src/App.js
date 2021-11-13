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
import {Footer} from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar item1="Home" item2="TV Shows" item3="Movies" item4="New &amp; Popular" item5="My List"/>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/new'>
            <SettingsPage></SettingsPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
