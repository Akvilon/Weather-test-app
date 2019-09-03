import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Action} from "../../store/types";
import {fetchToken} from "../../store/auth";


interface DispatchProps {
    onFetchToken: (code: string) => void;
}

class Auth extends React.Component<DispatchProps & RouteComponentProps> {

    public componentDidMount = async () => {
        console.log('Auth');
        if(this.isValidateCode) {
            const {location} = this.props;
            this.props.onFetchToken(location.search.split('=')[1]);
        }
    };

    public render() {
        if (this.isValidateCode) {
            return null;
        }
        return null;
    }

    get isValidateCode() {
        return this.props.location.search.indexOf('code') !== -1;
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchToken: (code: string) => dispatch(fetchToken(code))
});

const ConnectedAuth = connect<undefined, DispatchProps>(undefined, mapDispatchToProps)(Auth);

export { ConnectedAuth as Auth };