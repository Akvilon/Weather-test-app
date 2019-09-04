import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import {v4 as uuid} from 'uuid';
import {Layout} from './Layout';
import routes, { AppRoute } from './App.routes';
import { Auth } from './Auth';

class App extends React.PureComponent {
  render() {
      return (
          <>
						<Route path={'/auth'} render={this.renderAuth}/>
						<Layout>
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

export  { App};
