import React from 'react';
import './index.scss';
const Projects = () => (
	<section className="project-sctn">
		<div className="quote">
			<blockquote>"Talk is Cheap. Show me the code"</blockquote>
			<p>Linus Torvalds</p>
		</div>
		<p>Well, I have a done lot of project both at personal level and professionl level.</p>
		<p>Check out my github repo to see all the projects which I have done</p>
		<a
			href="https://github.com/binoysinha?utf8=%E2%9C%93&tab=repositories&q=&type=source&language="
			target="_blank"
			rel="noopener noreferrer"
			className="link-btn"
		>
			Github <i className="fab fa-github" />
		</a>
	</section>
);

export default Projects;
