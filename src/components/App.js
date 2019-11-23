import '../assets/style.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Dashboard from './dashboard/Dashboard';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
