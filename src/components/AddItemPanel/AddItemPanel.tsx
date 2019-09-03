import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './AddItemPanel.style';
import { Button } from '../../utils/Button';
import { Input } from '../../utils/Input';


class AddItemPanel extends React.PureComponent<WithStyles<typeof styles>> {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.addPanel}>
							<Input type={'text'} placeholder={'Type City name'}/>
              <Button>
                  <span>Add</span>
              </Button>
            </div>
        );
    }
}


const StyledAddItemPanel = withStyles(styles)(AddItemPanel);

export {StyledAddItemPanel as AddItemPanel};