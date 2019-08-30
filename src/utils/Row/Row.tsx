import * as React from 'react';
import {default as withStyles, WithStyles} from "react-jss";
import styles from './Row.style';

interface RowProps {
    leftPart: React.ReactElement,
    rightPart: React.ReactElement
}
type Props = RowProps & WithStyles<typeof styles>;

const Row: React.FC<Props> = ({leftPart, rightPart, classes}) => {
    return (
        <div className={classes.row}>
            <div className={classes.leftPart}>
                {leftPart}
            </div>
            <div className={classes.rightPart}>
                {rightPart}
            </div>
        </div>
    )
};
const StyledRow = withStyles(styles)(Row);
export {StyledRow as Row};