import React from 'react';
import Home from './pages/Home';
import Help from './pages/Help';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Game from './components/Game';

import Customize from './components/Customize';
import './styles/Global.css';
import LoginUsers from './components/LoginUsers';
const styles = {
  body:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

// In our main App component, we are rendering a single instance of a game canvas
function App() {


  return (  
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginUsers />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/play">
          <div style={styles.body}>
            <Game />
          </div>
        </Route>
        <Route exact path="/customize">
          <Customize />
        </Route>
        <Route exact path='/help'>
          <Help />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
