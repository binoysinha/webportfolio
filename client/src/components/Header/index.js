import React from 'react';
import './index.scss';

const Header = () => (
	<header className="home-header">
		<img className="user-img " src="https://res.cloudinary.com/vmina/image/upload/v1545673284/dp.jpg" alt="" />
		<div className="user-info">
			<h1>Hi, I am Binoy.</h1>
			<h2>Full Stack Developer based out of Bengaluru</h2>
		</div>
	</header>
);

export default Header;
