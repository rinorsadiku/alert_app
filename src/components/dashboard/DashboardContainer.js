import React from 'react';
import requireAuth from '../requireAuth';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
	async componentDidMount() {
		await this.props.fetchUser();
	}

	render() {
		return (
			<div className="container--app">
				<div className="header">
					<h1 className="header__title">Alert App</h1>
					<div className="header__details">
						<p>{this.props.user.name}</p>
						<div className="header__creds">RS</div>
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => {
	return {
		user
	};
};

export default connect(mapStateToProps, actions)(requireAuth(Dashboard));
