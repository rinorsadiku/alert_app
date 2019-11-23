import React from 'react';

const AuthContainer = props => {
	return (
		<div className="container--auth">
			<div className={`auth__img ${props.image}`} />
			{props.children}
		</div>
	);
};

export default AuthContainer;
