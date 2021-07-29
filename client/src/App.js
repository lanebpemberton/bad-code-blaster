import React from 'react';

import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Game from './components/Game';
import Customize from './components/Customize';
import './styles/Global.css';

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
          <h1>Login component goes here</h1>
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
      </Switch>
    </Router>
    
  );
}

export default App;
