import React from 'react';
import Home from './pages/Home';
import GameCanvas from './components/GameCanvas';
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
      <Home />
    </div>
  );
}

export default App;
