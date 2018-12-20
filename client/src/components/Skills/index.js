import React from 'react';
import './index.scss';
const Skills = ({ callback }) => {
	callback();
	return (
		<div className="skill-container">
			<div className="skills-icon">
				<div className="smoke">
					<span className="s0">
						<i className="fab fa-html5" />
					</span>
					<span className="s1">
						<i className="fab fa-css3-alt" />
					</span>
					<span className="s2">
						<i className="fab fa-js-square" />
					</span>
					<span className="s3">
						<i className="fab fa-react" />
					</span>
					<span className="s4">
						<i className="fab fa-vuejs" />
					</span>
					<span className="s5">
						<i className="fab fa-node-js" />
					</span>
					<span className="s6">
						<i className="fab fa-sass" />
					</span>
					<span className="s7">
						<i className="fab fa-docker" />
					</span>
					<span className="s8">
						<i className="fab fa-gulp" />
					</span>
					<span className="s9">
						<i className="fab fa-aws" />
					</span>
					<span className="s10">
						<i className="fab fa-npm" />
					</span>
				</div>
			</div>
			<div className="quote">
				<blockquote>"It is possible to fly without motors, but not without knowledge and skill."</blockquote>
				<p>Wilbur Wright</p>
			</div>
		</div>
	);
};

export default Skills;
