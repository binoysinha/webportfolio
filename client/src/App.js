import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu';
import Home from './components/Home';
import Header from './components/Header';

const Skills = lazy(() => import('./components/Skills'));
const Career = lazy(() => import('./components/Career'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));

class App extends Component {
	// state = {
	// 	toggleHeader: false
	// };

	// componentDidMount() {

	// }
	// showHeader = () => {
	// 	this.setState(prevState => ({
	// 		toggleHeader: true
	// 	}));
	// 	console.log('heeee');
	// };
	// hideHeader = () => {
	// 	this.setState(prevState => ({
	// 		toggleHeader: false
	// 	}));
	// 	console.log('heeee');
	// };

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	return nextState.toggleHeader !== this.state.toggleHeader;
	// }
	render() {
		let routes = (
			<Suspense fallback={<Loading />}>
				<Menu />

				<Switch>
					<Route path="/career" component={Career} />
					<Route path="/skills" component={Skills} />
					<Route path="/about" component={About} />
					<Route path="/testimonials" component={Testimonials} />
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

const Loading = () => <p>Loading</p>;
