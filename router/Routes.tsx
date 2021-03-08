import {Switch,Route,Redirect} from "react-router-dom"
import PropTypes from "prop-types"
import Main from '../src/Main'
import Login from '../src/pages/Login';
import Join from '../src/pages/Join';

const LoggedInRoutes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/join" component={Join}  />
  
      <Redirect from="*" to="/" />
    </Switch>
);
  
const AppRouter = ({ isLoggedIn }:any) =>
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}
  
export default AppRouter;