import * as React from 'react';
import {default as withStyles, WithStyles} from "react-jss";
import styles from './SignIn.style';

const key = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;


class SignIn extends React.PureComponent<WithStyles<typeof styles>> {

    public render() {

        const { classes } = this.props;
        const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${key}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

        return (
            <div className={classes.signInWrap}>
                <div className={classes.signIn}>
                    <h3>Welcome to</h3>
                    <h2>WEATHER APP</h2>
                    <a href={AUTH_URL}>- Sign in -</a>
                </div>
                <div className={classes.signInLogo}>
									<img src={require('../../assets/sun.svg')}  alt="logo"/>
                </div>
            </div>

        )
    }
}


const StyledSignIn = withStyles(styles)(SignIn);

export { StyledSignIn as SignIn };