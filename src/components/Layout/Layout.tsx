import * as React from 'react';
import {Header} from '../Header';


class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export {Layout};