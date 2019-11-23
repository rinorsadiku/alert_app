import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import FormField from '../auth/FormField';

import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DashboardContainer from './DashboardContainer';

class AlertsNew extends React.Component {
	onFormSubmit = formValues => {
		console.log(formValues);
	};

	render() {
		return (
			<DashboardContainer>
				<div className="content content--small">
					<form
						onSubmit={this.props.handleSubmit(this.onFormSubmit)}
						className="form"
					>
						<div className="form__group">
							<label htmlFor="" className="form__label">
								Event
							</label>

							<Field
								className="form__input"
								name="event"
								component="select"
							>
								<option></option>
								<option value="#ff0000">Red</option>
								<option value="#00ff00">Green</option>
								<option value="#0000ff">Blue</option>
							</Field>
						</div>
						<div className="form__group">
							<label htmlFor="" className="form__label">
								Method
							</label>

							<Field
								className="form__input"
								name="method"
								component="select"
							>
								<option></option>
								<option value="#ff0000">Red</option>
								<option value="#00ff00">Green</option>
								<option value="#0000ff">Blue</option>
							</Field>
						</div>
						<div className="form__group">
							<label htmlFor="" className="form__label">
								Value
							</label>
							<Field
								className="form__input"
								name="value"
								component={FormField}
							/>
						</div>
						<div className="form__group">
							<button type="submit" className="btn--form">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</DashboardContainer>
		);
	}
}

const form = reduxForm({
	form: 'signinForm'
})(withRouter(AlertsNew));

export default connect(null, actions)(withRouter(form));
