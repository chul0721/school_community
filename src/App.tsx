import React from 'react';
import Header from './components/Header'
<<<<<<< HEAD
import Footer from './components/Footer'
=======
>>>>>>> 2b5e8cb148a51f94373340a5c519a65c05eab297
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
<<<<<<< HEAD
              <Footer />
=======
>>>>>>> 2b5e8cb148a51f94373340a5c519a65c05eab297
            </Route>

          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;