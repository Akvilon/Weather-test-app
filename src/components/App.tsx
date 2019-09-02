import * as React from 'react';
import styles from './App.style';
import withStyles, {WithStyles} from "react-jss";
import {Route, Switch} from "react-router";
import {v4 as uuid} from 'uuid';
import {Layout} from "./Layout";
import {SignIn} from './SignIn';
import {AppState} from "../store";
import {connect} from "react-redux";
import routes, { AppRoute } from './App.routes';

interface StateProps {
    isSignedIn: boolean;
}

class App extends React.PureComponent<StateProps & WithStyles<typeof styles>> {
  render() {
    const {classes, isSignedIn} = this.props;
      return (
          <div className={classes.wrapper}>
            {isSignedIn? this.renderMain() : <SignIn />}
          </div>
      );
  }

    private renderMain = () => (
        <Layout>
            <Switch>
              {
                routes.map((route: AppRoute) => <Route key={uuid()} {...route} />)
              }
            </Switch>
        </Layout>
    );
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token
    }
};

const StyledApp = withStyles(styles)(connect<StateProps, undefined, undefined>(mapStateToProps,undefined)(App));

export  {StyledApp as App};
