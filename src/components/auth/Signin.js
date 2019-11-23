import React from 'react';
import { Link } from 'react-router-dom';
import AuthContainer from './AuthContainer';

const Signin = () => {
	return (
		<AuthContainer image={'auth__img--1'}>
			<div className="sign">
				<h2 className="sign__title">Sign in</h2>

				<form className="form">
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
						<input className="form__input" type="password" />
					</div>

					<div className="form__group">
						<button className="btn--form">Sign up</button>
					</div>
				</form>

				<Link to="/signup" className="btn--link">
					Create new account
				</Link>
			</div>
		</AuthContainer>
	);
};

export default Signin;
