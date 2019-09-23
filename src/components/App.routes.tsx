import * as React from 'react';
import {PATHES} from './App.constants';
import {RouteComponentProps} from 'react-router-dom';
import {Home} from './Home';
import { Auth } from './Auth';
import { WeatherCardDetails } from './WeatherCardDetails';
import { Redirect } from 'react-router';


export interface AppRoute {
    path: PATHES,
    render: (params: RouteComponentProps) => any;
    exact?: boolean;
}

export default  [
  {
      path: PATHES.HOME,
      render: (props: RouteComponentProps) => <Home {...props}/>,
      exact: true
  },
  {
      path: PATHES.AUTH,
      render: (props: RouteComponentProps) => <Auth {...props}/>
  },
	{
	    path: PATHES.DETAILS,
      render: (props: RouteComponentProps) => <WeatherCardDetails {...props}/>
	},
	{
	    path: PATHES.NOT_FOUND,
		  render: (props: RouteComponentProps) => <div>Not found!</div>
	},
	{
		  path: PATHES.REDIRECT,
		  render: (props: RouteComponentProps) => <Redirect to='/404' />
	}
];