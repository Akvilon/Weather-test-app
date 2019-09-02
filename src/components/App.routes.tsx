import {PATHES} from "./App.constants";
import {RouteComponentProps} from "react-router-dom";
import {Home} from "./Home";
import {Auth} from "./Auth";
import {Redirect} from "react-router";
import { Layout } from './Layout';
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
        path: PATHES.AUTH,
        render: (props: RouteComponentProps) => <Auth {...props}/>
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