import React from 'react';
import LoginForm from './components/LoginForm';
// import GameCanvas from './components/GameCanvas';
import './styles/Global.css';
import 'bootstrap/dist/css/bootstrap.css';
const styles = {
  body:{
    padding:0,
    margin:0
  }
}

// In our main App component, we are rendering a single instance of a game canvas
function App() {
  return (
    // <div style={styles.body}>
    //   <GameCanvas />
    // </div>
    <LoginForm></LoginForm>
  );
}

export default App;
