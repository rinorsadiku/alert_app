import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default ChildComponent => {
	class ComposedComponent extends React.Component {
		componentDidMount() {
			this.navigateOnAuth();
		}

		componentDidUpdate() {
			this.navigateOnAuth();
		}

		navigateOnAuth() {
			if (!this.props.auth) {
				this.props.history.push('/signin');
			}
		}

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = state => {
		return {
			auth: state.auth.authenticated
		};
	};

	return connect(mapStateToProps)(withRouter(ComposedComponent));
};
