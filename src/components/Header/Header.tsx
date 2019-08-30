import * as React from 'react';
import styles from './Header.style';
import {default as withStyles, WithStyles} from "react-jss";
import {Link} from "react-router-dom";

class Header extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Link to={'/'}>
                        <img src={require('../../assets/sun.svg')}  alt="logo"/>
                        <span>Weather app</span>
                    </Link>
                </div>
            </div>
        )
    }
}

const StyledHeader = withStyles(styles)(Header);
export {StyledHeader as Header};