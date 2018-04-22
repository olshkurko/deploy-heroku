import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from '../conteiners/PrivateRoute';
import ChatPage from '../conteiners/ChatPage';
import WelcomePage from '../conteiners/WelcomePage';
import history from '../utils/history';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const App = ({ classes }) => (
  <Router history={history}>
    <div className={classes.root}>
      <Switch>
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);
App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(App);
