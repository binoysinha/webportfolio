import React from 'react';
import './index.scss';
import Img2 from '../../assets/img/user.jpg';

const Header = () => (
	<header className="home-header">
		{/* <h4>{'{{hello world}}'}</h4> */}
		{/* <div className="quote">
			<blockquote>"Talk is Cheap. Show me the code"</blockquote>
			<p>Linus Torvalds</p>
		</div> */}
		<img className="user-img " src="https://res.cloudinary.com/vmina/image/upload/v1545673284/dp.jpg" alt="" />
		<div className="user-info">
			<h1>Hi, I am Binoy.</h1>
			<h2>Full Stack Developer based out of Bengaluru</h2>
		</div>
	</header>
);

export default Header;
