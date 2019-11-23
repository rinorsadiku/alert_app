import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="container--app">
			<div className="header">
				<h1 className="header__title">Alert App</h1>
				<div className="header__details">
					<p>Rinor Sadiku</p>
					<div className="header__creds">RS</div>
				</div>
			</div>
			<div className="content">
				<table>
					<tr>
						<th>Event</th>
						<th>Method</th>
						<th>Value</th>
						<th>Created</th>
					</tr>
					<tr>
						<td>Jill</td>
						<td>Smith</td>
						<td>50</td>
						<td>50</td>
					</tr>
					<tr>
						<td>Eve</td>
						<td>Jackson</td>
						<td>94</td>
						<td>94</td>
					</tr>
				</table>

				<Link to="/alerts/new" className="content__new">
					+
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
