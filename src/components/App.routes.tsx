import {PATHES} from "./App.constants";
import {RouteComponentProps} from "react-router-dom";
import {Home} from "./Home";
import {Redirect} from "react-router";
import * as React from 'react';

export interface AppRoute {
  path: PATHES;
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
        path: PATHES.NOT_FOUND,
        render: () => <div>Not found!</div>
    },

    {
        path: PATHES.REDIRECT,
        render: () => <Redirect to={'/404'} />
    }
]