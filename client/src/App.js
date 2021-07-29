import React from 'react';
// import GameCanvas from './components/GameCanvas';
import './styles/Global.css';
import LoginUsers from './components/LoginUsers';
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
      <LoginUsers/>
      {/* <GameCanvas /> */}
    </div>
  );
}

export default App;
