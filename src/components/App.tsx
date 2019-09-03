import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import {v4 as uuid} from 'uuid';
import {Layout} from './Layout';
import {AppState} from '../store';
import {connect} from 'react-redux';
import routes, { AppRoute } from './App.routes';
import { Auth } from './Auth';

interface StateProps {
    isSignedIn: boolean;
}
interface DispatchProps {}
interface AppProps {}

class App extends React.PureComponent<StateProps & DispatchProps & AppProps> {
  render() {
    const {isSignedIn} = this.props;
      return (
          <>
						<Route path={'/auth'} render={this.renderAuth}/>
						<Layout isSignedIn={isSignedIn}>
							<Switch>
								{
									routes.map((route: AppRoute) => <Route key={uuid()} {...route} />)
								}
							</Switch>
						</Layout>
          </>
      );


  }

	private renderAuth = (props: RouteComponentProps) => <Auth {...props}/>;

}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token
    };
};

const ConnectedApp = connect<StateProps, DispatchProps, AppProps>(mapStateToProps,undefined)(App);

export  {ConnectedApp as App};
