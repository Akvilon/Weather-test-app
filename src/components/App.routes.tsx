import {PATHES} from "./App.constants";
import {RouteComponentProps} from "react-router-dom";
import {Home} from "./Home";


export default  [
    {
        path: PATHES.HOME,
        render: (props: RouteComponentProps) => <Home {...props}/>
    },
    {
        path: PATHES.AUTH,
        render: (props: RouteComponentProps) => <Home {...props}/>
    }
]