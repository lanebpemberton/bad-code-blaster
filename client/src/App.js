import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Game from './components/Game';
import './styles/Global.css';

const styles = {
  body:{
    padding:0,
    margin:0,
    justifyContent:'center',
    alignContent:'center',
    display:'flex'
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
            <h1>Home component goes here</h1>
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
