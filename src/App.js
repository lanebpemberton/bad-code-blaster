import React from 'react';
import GameCanvas from './components/GameCanvas';
import './styles/Global.css';

const styles = {
  body:{
    padding:0,
    margin:0,
    justifyContent:'center',
    display:'flex'
  }
}

// In our main App component, we are rendering a single instance of a game canvas
function App() {
  return (
    <div style={styles.body}>
      <GameCanvas />
    </div>
  );
}

export default App;
