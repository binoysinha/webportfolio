import React from 'react';
import './index.scss';
import SocialLinks from '../SocialLinks';
import Header from '../Header';
const Home = props => (
	<>
		<Header />
		<div className="home">
			<div className="site-wrap animated fadeInUp">
				Welcome{' '}
				<span role="img" aria-label="greetings">
					🙏
				</span>
				<p>
					My journey as web developer begins seven years ago. From showing a simple <code>{'{{hello world}} '}</code>
					text on browser to developing complex web application aptly defined my growth as a developer.
				</p>
				<p>
					My passion and love for Javascript enabled me to move to backend development also and these days exploring ML
					using Javascript. For me coding is a hobby, and like building stuffs for the web. I firmly believe that
					learning is a lifelong process. I spent more times on Udemy than on Netflix.
				</p>
				<p>
					I don't restrict myself to tech space only. I have keen interest in world affairs from politics to environment
					and whats happening in and around us.
				</p>
				<div className="quote">
					<blockquote>
						"I do what I love, I love what I do.
						<br />
						That's the key to happiness"
					</blockquote>
					<p>Mario Duarte</p>
				</div>
			</div>
			<SocialLinks />
			<footer>Designed and developed by me. Code is open sourced.</footer>
		</div>
	</>
);

export default Home;
