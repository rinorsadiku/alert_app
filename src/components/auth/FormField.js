import React from 'react';

export default ({
	input,
	placeholder,
	className,
	type,
	meta: { error, touched }
}) => {
	return (
		<>
			<input
				type={type}
				className={className}
				placeholder={placeholder}
				{...input}
			/>
			<p style={{ color: '#e04646' }}>{error && touched ? error : ''}</p>
		</>
	);
};
