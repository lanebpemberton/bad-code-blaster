import React from 'react';
import LoginForm from './components/LoginForm';
// import GameCanvas from './components/GameCanvas';
import './styles/Global.css';
import 'bootstrap/dist/css/bootstrap.css';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import SignupForm from './components/SignupForm';

const styles = {
  body:{
    padding:0,
    margin:0
  }
}
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// In our main App component, we are rendering a single instance of a game canvas
function App() {
  return (
    <ApolloProvider  client ={client}>
     <div style={styles.body}>
     <LoginForm></LoginForm>
     <SignupForm></SignupForm>
    {/* //   <GameCanvas /> */}
     </div>
  
    </ApolloProvider>
  );
}

export default App;
