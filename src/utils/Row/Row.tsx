import * as React from 'react';
import {default as withStyles, WithStyles} from "react-jss";
import styles from './Row.style';

interface RowProps {
    leftPart: React.ReactElement,
    rightPart: React.ReactElement,
	  leftWidth: string,
	  rightWidth: string
}
type Props = RowProps & WithStyles<typeof styles>;

const Row: React.FC<Props> = ({leftPart, rightPart, leftWidth, rightWidth, classes}) => {

  const leftPartStyles = {
    width: leftWidth
  };
	const rightPartStyles = {
		width: rightWidth
	};
    return (
        <div className={classes.row}>
            <div style={leftPartStyles}>
                {leftPart}
            </div>
            <div style={rightPartStyles}>
                {rightPart}
            </div>
        </div>
    )
};
const StyledRow = withStyles(styles)(Row);
export {StyledRow as Row};