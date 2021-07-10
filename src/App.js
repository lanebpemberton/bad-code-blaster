import React from 'react';
import GameCanvas from './components/GameCanvas';
import './styles/Global.css';

const styles = {
  body:{
    padding:0,
    margin:0
  }
}

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div style={styles.body}>
      <GameCanvas />
    </div>
  );
}

export default App;
