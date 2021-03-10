import React from 'react';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import Join from './pages/Join'
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
            </Route>

          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;