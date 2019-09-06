import * as React from 'react';
import {default as withStyles, WithStyles} from 'react-jss';
import styles from './AddItemPanel.style';
import { Button } from '../../utils/Button';
import { Input } from '../../utils/Input';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { getNewWeatherListItem } from '../../store/home';

interface AddItemPanelState {
  value: string | undefined
}

interface DispatchProps {
	addItem: (value:string) => void;
}

class AddItemPanel extends React.PureComponent<DispatchProps & WithStyles<typeof styles>,AddItemPanelState> {

  public state = {
    value: ''
  };
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.addPanel}>
							<form onSubmit={this.addItem}>
								<Input type={'text'} placeholder={'Type City name'} onChange={this.onInputChange} value={this.state.value}/>
								<Button type={'submit'}>
									<span>Add</span>
								</Button>
              </form>
            </div>
        );
    }

    private onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({value:event.currentTarget.value.toUpperCase()})
    };
    private addItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(this.state.value !== '') {
					this.props.addItem(this.state.value);
					this.setState({value: ''});
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
		return {
			addItem: (value: string) => dispatch(getNewWeatherListItem(value))
		}
};

const StyledAddItemPanel = withStyles(styles)(connect<undefined,DispatchProps,undefined>(undefined, mapDispatchToProps)(AddItemPanel));
export {StyledAddItemPanel as AddItemPanel};