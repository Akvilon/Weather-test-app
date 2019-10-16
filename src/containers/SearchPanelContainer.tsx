import * as React from 'react';
import { connect } from 'react-redux';
import { searchUserCity } from '../store/home';
import { Dispatch } from 'redux';
import { Action } from '../store/types';
import { SearchPanel } from '../components/SearchPanel';

interface DispatchProps {
	searchItem: (value:string) => void;
}

class SearchPanelContainer extends React.PureComponent<DispatchProps> {


	render() {
		return (
			<SearchPanel searchItem={this.props.searchItem}/>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
	return {
		searchItem: (value: string) => dispatch(searchUserCity(value))
	};
};

const ConnectedSearchPanel = connect<undefined,DispatchProps>(undefined, mapDispatchToProps)(SearchPanelContainer);

export {ConnectedSearchPanel as SearchPanelContainer};