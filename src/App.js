import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Hire from './views/Hire';
import Pricing from './views/Pricing';
import Service from './views/Service';
export default function App() {
	return (
		<Router>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/hire">
				<Hire />
			</Route>
			<Route path="/pricing">
				<Pricing />
			</Route>
			<Route path="/service">
				<Service />
			</Route>
			<Route path="/" exact>
				<Home />
			</Route>
		</Router>
	);
}
