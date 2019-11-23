import React from 'react';
import requireAuth from '../requireAuth';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import DashboardContainer from './DashboardContainer';

class Dashboard extends React.Component {
	async componentDidMount() {
		await this.props.fetchAlerts();
	}

	renderAlerts = () => {
		return this.props.alerts.map(alert => {
			console.log(alert);
			return (
				<tr>
					<td>
						{/* Here would be the event fetched from the "alert_event_id" */}
					</td>
					<td>
						{/* Here would be the method fetched from the "alert_method_id" */}
					</td>
					<td>
						{/* Here would be the email of the user who has created the alert */}
					</td>
					<td>
						{/* And right here would be the date of creation, probably formatted nicely */}
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<DashboardContainer>
				<div className="content">
					<table>
						<thead>
							<tr>
								<th>Event</th>
								<th>Method</th>
								<th>Value</th>
								<th>Created</th>
							</tr>
						</thead>
						<tbody>{this.renderAlerts()}</tbody>
					</table>

					<Link to="/alerts/new" className="content__new">
						+
					</Link>
				</div>
			</DashboardContainer>
		);
	}
}

const mapStateToProps = ({ user, alerts }) => {
	return {
		user,
		alerts
	};
};

export default connect(mapStateToProps, actions)(requireAuth(Dashboard));
