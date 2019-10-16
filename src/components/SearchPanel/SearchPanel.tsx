import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SearchPanel.style';
import { Input } from '../../utils/Input';
import { Button } from '../../utils/Button';


interface SearchPanelProps {
	searchItem: (value: string) => void
}

class SearchPanel extends React.PureComponent< SearchPanelProps & WithStyles<typeof styles>> {
    public state = {
        value: ''
      };
      
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.searchPanel}>
                <form onSubmit={this.searchItem}>
                    <Input type={'text'} placeholder={'Type your City name'} 
                                         onChange={this.onInputChange} 
                                         value={this.state.value}/>
										<Button type={'submit'}>
											<span>Add</span>
										</Button>
              </form>
            </div>
        )
    }

	private onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({value: event.currentTarget.value.toUpperCase()});
	};

	private searchItem = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if(this.state.value !== '') {
			this.props.searchItem(this.state.value);
			this.setState({value: ''});
		}
	};
}


const StyledSearchPanel = withStyles(styles)(SearchPanel);

export {StyledSearchPanel as SearchPanel};