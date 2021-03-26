import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import Join from './pages/Join'
import Board from './pages/Board'
import './styles/Form.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>

            <Route path="/join">
              <Join />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Header />
              <Footer />
            </Route>

            <Route path="/board">
              <Board />
            </Route>

          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;