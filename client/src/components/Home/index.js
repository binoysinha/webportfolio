import React, { Component } from 'react';
import './index.scss';
import SocialLinks from '../SocialLinks';
import Header from '../Header';

class Home extends Component {
	state = {
		totalVisits: 0
	};

	componentDidMount() {
		this.fetchValues();
	}

	async fetchValues() {
		try {
			const { visits } = await fetch('/api/visits')
				.then(resp => resp.json())
				.then(val => {
					console.log(val);
					return val;
				});
			this.setState({ totalVisits: visits });
		} catch (err) {
			console.log(err);
		}
	}
	render() {
		let { totalVisits } = this.state;
		return (
			<>
				<Header />
				<div className="home">
					<div className="site-wrap animated fadeInUp">
						Welcome&nbsp;
						<span role="img" aria-label="greetings">
							🙏
						</span>
						<p>
							My journey as web developer begins seven years ago. From showing a simple{' '}
							<code>{'{{hello world}} '}</code>
							text on browser to developing complex web application aptly defined my growth as a developer.
						</p>
						<p>
							I have experience in building both large e-commerce applications as well as enterprise applications. For
							me coding is a hobby, and like building stuffs for the web. I firmly believe that learning is a lifelong
							process. I have a passion for understanding things at a fundamental level and sharing it as clearly as
							possible.
						</p>
						<p>
							I don't restrict myself to tech space only. I have keen interest in world affairs from politics to
							environment and whats happening in and around us. Whenever, I am in holiday mode, I take out my bike and
							goes out for long drive.
						</p>
						<div className="quote">
							<blockquote>
								"I do what I love, I love what I do.
								<br />
								That's the key to happiness"
							</blockquote>
						</div>
					</div>
					<hr />
					<SocialLinks />

					<footer className="addl-info">
						<div className="visitor-count">
							You are vistors no.&nbsp;
							<strong>{totalVisits}</strong>
						</div>
						<p>© Designed and developed by me.</p>
					</footer>
				</div>
			</>
		);
	}
}

export default Home;
