import {PATHES} from './App.constants';
import {RouteComponentProps} from 'react-router-dom';
import {Home} from './Home';
import { match, Redirect } from 'react-router';
import * as React from 'react';
import { WeatherCard } from './WeatherCard';

export interface AppRoute {
  path: PATHES;
  render: (params: RouteComponentProps) => any;
}

export default  [

    {
		path: PATHES.HOME,
		render: (props: RouteComponentProps) => <Home {...props}/>,
	  },

    {
        path: PATHES.NOT_FOUND,
        render: () => <div>Not found!</div>
    },

    {
        path: PATHES.REDIRECT,
        render: () => <Redirect to={'/404'} />
    }
];