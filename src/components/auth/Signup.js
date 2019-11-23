import React from 'react';
import { Link } from 'react-router-dom';

import AuthContainer from './AuthContainer';

const Signup = () => {
	return (
		<AuthContainer image={'auth__img--2'}>
			<div className="sign">
				<h2 className="sign__title">Sign up</h2>

				<form className="form">
					<div className="form__group">
						<label className="form__label">Name</label>
						<input
							className="form__input"
							placeholder="Your Name"
							type="text"
						/>
					</div>

					<div className="form__group">
						<label className="form__label">Email</label>
						<input
							className="form__input"
							placeholder="Your Email"
							type="text"
						/>
					</div>

					<div className="form__group">
						<label className="form__label">Password</label>
						<input
							className="form__input"
							placeholder="Your Password"
							type="text"
						/>
					</div>

					<div className="form__group">
						<label className="form__label">
							Password Confirmation
						</label>
						<input
							className="form__input"
							placeholder="Confirm Your Password"
							type="text"
						/>
					</div>

					<div className="form__group">
						<button className="btn--form">Sign in</button>
					</div>
				</form>

				<Link to="/singup" className="btn--link">
					Already have an account? Log in
				</Link>
			</div>
		</AuthContainer>
	);
};

export default Signup;
