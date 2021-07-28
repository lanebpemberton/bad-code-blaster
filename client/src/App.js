import React from 'react';

import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Game from './components/Game';
import './styles/Global.css';

const styles = {
  body:{
    backgroundImage: `url("./styles/images/bg-color-matched-to-logo.jpg")`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}

// In our main App component, we are rendering a single instance of a game canvas
function App() {
  return (
    <div style={styles.body}>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Login component goes here</h1>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/play">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
