import * as React from 'react';
import { RouteComponentProps } from 'react-router';


class WeatherCardDetails extends React.PureComponent<RouteComponentProps> {

	componentDidMount() {
		// const id = this.props.match.params.id;
	}

	render() {

		return (
			<div>
				<h2>WEATHER CARD DETAILS</h2>
				<p>ID: </p>
			</div>
		)
	}
}


export {WeatherCardDetails};