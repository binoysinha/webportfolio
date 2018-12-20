import React from 'react';
import './index.scss';
import SocialLinks from '../SocialLinks';
import Header from '../Header';
const Home = props => (
	<>
		<Header />
		<div className="home">
			<div className="site-wrap">
				<p>
					I like JavaScript and everything web. When my dev senses kick-in I build presumably awesome stuff. I stay
					close to the community and try to keep tabs with the pace at which the web is evolving. I also like to blog
					what I learn. I built this site from scratch. By scratch, I mean absolutely from scratch without any UI
					library/framework (except React though) and had so much fun along the way. React-Redux, Node.js, Ruby on
					Rails, Java, Spring Boot, Docker and AWS are the main tricks up my sleeve. I am also obsessed with making the
					web look pretty with SASS/CSS.
				</p>

				<p>
					When I'm not working you can find me watching my favorite New England sports teams, competing on CodeWars,
					taking runs around Capitol Hill, rock climbing, or participating in DC coding community events. I graduated
					from Hamilton College with a BA in government after completing research in how to effectively teach computer
					science to 7-12th graders and on the differences in representation in Congress across party and gender lines.
				</p>
			</div>
			<SocialLinks />
			<footer>Designed and developed by me. Code is open sourced.</footer>
		</div>
	</>
);

export default Home;
