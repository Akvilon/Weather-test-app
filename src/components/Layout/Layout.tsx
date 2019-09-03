import * as React from 'react';
import {Header} from '../Header';
import { SignIn } from '../SignIn';
import styles from './Layout.style';
import { default as withStyles, WithStyles } from 'react-jss';

interface LayoutProps {
	isSignedIn: boolean;
}

class Layout extends React.Component<LayoutProps & WithStyles<typeof styles>> {
    render() {
			const {classes, isSignedIn} = this.props;
        return (
            <div className={classes.wrapper}>
							<SignIn />
							{/*{this.renderContent()}*/}
							{/*{isSignedIn ? this.renderContent() : <SignIn />}*/}
            </div>
        );
    }


    private renderContent = () => (
    	<>
				<Header />
				{this.props.children}
			</>
		);
}

const StyledLayout = withStyles(styles)(Layout);

export {StyledLayout as Layout};