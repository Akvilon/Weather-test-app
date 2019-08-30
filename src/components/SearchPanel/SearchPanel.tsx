import * as React from 'react';
import {default as withStyles, WithStyles} from "react-jss";
import styles from './SearchPanel.style';


class SearchPanel extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        return (
            <div>I'am a search panel</div>
        )
    }
}


const StyledSearchPanel = withStyles(styles)(SearchPanel);

export {StyledSearchPanel as SearchPanel};