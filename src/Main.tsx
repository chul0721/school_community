import React from 'react';
import Header from './components/Header'
import AppRouter from "../router/Routes"

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AppRouter isLoggedIn={true} />
      </div>
    );  
  }
}

export default Main;
