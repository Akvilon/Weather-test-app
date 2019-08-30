import * as React from 'react';
import {default as withStyles, WithStyles} from "react-jss";
import styles from './AddItemPanel.style';


class AddItemPanel extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        return (
            <div>I'am a add item panel</div>
        )
    }
}


const StyledAddItemPanel = withStyles(styles)(AddItemPanel);

export {StyledAddItemPanel as AddItemPanel};