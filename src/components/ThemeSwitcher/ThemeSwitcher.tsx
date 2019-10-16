import * as React from 'react';
import { connect } from 'react-redux';
import { lightTheme, darkTheme } from '../../styles';
import { ThemeProvider } from 'theming';
import { AppState } from '../../store';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';


interface StateProps  {
	activeTheme: string
}

const THEME = 'THEME';


class ThemeSwitcher extends React.PureComponent<StateProps> {

	public state = {
		theme: lightTheme
	};

	componentDidMount() {

		const themeMode = getLocalStorage(THEME);
		if(themeMode){
			if(themeMode === 'light'){
				this.setState({theme: lightTheme});
			}else {
				this.setState({theme: darkTheme});
			}
		}else {
			return
		}
	}

	componentDidUpdate() {
		const {activeTheme} = this.props;
		if(activeTheme === 'light'){
			this.setState({theme: lightTheme});
			setLocalStorage(THEME, 'light')
		}else {
			this.setState({theme: darkTheme});
			setLocalStorage(THEME, 'dark')
		}
	}

	render(){
		const {theme} = this.state;
		return (
			<ThemeProvider theme={theme} >
				{this.props.children}
			</ThemeProvider>
		)
	}
}


const mapStateToProps = (state: AppState): StateProps => {
	return {
		activeTheme: state.home.activeTheme
	}
};


const ConnectedThemeSwitcher = connect<StateProps>(mapStateToProps, undefined)(ThemeSwitcher);

export {ConnectedThemeSwitcher as ThemeSwitcher}