import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';

import { Link, withRouter } from 'react-router-dom';

import FormField from './FormField';
import AuthContainer from './AuthContainer';

class Signup extends React.Component {
	onFormSubmit = formValues => {
		const { name, email, password } = formValues;
		this.props.signup({ name, email, password }, () => {
			this.props.history.push('/signin');
		});
	};

	render() {
		return (
			<AuthContainer image={'auth__img--2'}>
				<div className="sign">
					<h2 className="sign__title">Sign up</h2>

					<form
						onSubmit={this.props.handleSubmit(this.onFormSubmit)}
						className="form"
					>
						<div className="form__group">
							<label className="form__label">Name</label>
							<Field
								className="form__input"
								placeholder="Your Name"
								type="text"
								name="name"
								component={FormField}
							/>
						</div>

						<div className="form__group">
							<label className="form__label">Email</label>
							<Field
								className="form__input"
								placeholder="Your Email"
								type="text"
								name="email"
								component={FormField}
							/>
						</div>

						<div className="form__group">
							<label className="form__label">Password</label>
							<Field
								name="password"
								className="form__input"
								type="password"
								component={FormField}
							/>
						</div>

						<div className="form__group">
							<label className="form__label">
								Password Confirmation
							</label>
							<Field
								className="form__input"
								type="password"
								component={FormField}
								name="confirm"
							/>
						</div>

						<div className="error">{this.props.errorMessage}</div>

						<div className="form__group">
							<button type="submit" className="btn--form">
								Sign up
							</button>
						</div>
					</form>

					<Link to="/signin" className="btn--link">
						Already have an account? Log in
					</Link>
				</div>
			</AuthContainer>
		);
	}
}

const validate = values => {
	const errors = {};
	const fields = ['name', 'email', 'password', 'confirm'];

	if (values['password'] !== values['confirm']) {
		errors['confirm'] = 'Please confirm your password';
	}

	fields.forEach(field => {
		const fieldCapitalized = field.charAt(0).toUpperCase() + field.slice(1);

		if (!values[field]) {
			errors[field] = `${fieldCapitalized} is required`;
		}
	});

	return errors;
};

const mapStateToProps = state => {
	return { errorMessage: state.auth.errorMessage };
};

const form = reduxForm({
	form: 'signupForm',
	validate
})(withRouter(Signup));

export default connect(mapStateToProps, actions)(form);
