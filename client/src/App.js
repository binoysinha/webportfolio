import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import Menu from './components/Menu';
import Home from './components/Home';

const Skills = lazy(() => import('./components/Skills'));
const Career = lazy(() => import('./components/Career'));
const Projects = lazy(() => import('./components/Projects'));

const Contact = lazy(() => import('./components/Contact'));

class App extends Component {
	render() {
		let routes = (
			<Suspense fallback={<Loading />}>
				<Menu />

				<Switch>
					<Route path="/career" component={Career} />
					<Route path="/skills" component={Skills} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />

					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</Suspense>
		);
		return (
			<section className="">
				<Router>{routes}</Router>
			</section>
		);
	}
}

export default App;

const Loading = () => <p />;
