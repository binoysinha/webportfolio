import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/img/logo.png';
const Menu = () => {
	useEffect(() => {
		const nav = document.querySelector('#main');
		let topOfNav = nav.offsetTop;

		function fixNav() {
			console.log('hello');
			if (window.scrollY >= topOfNav) {
				document.body.style.paddingTop = nav.offsetHeight + 'px';
				document.body.classList.add('fixed-nav');
			} else {
				document.body.classList.remove('fixed-nav');
				document.body.style.paddingTop = 0;
			}
		}

		window.addEventListener('scroll', fixNav);
	});
	return (
		<nav id="main">
			<NavLink to="/" className="logo">
				<img src={Logo} alt="binoy sinha" />
			</NavLink>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/skills">Skills</NavLink>
			<NavLink to="/career">Career</NavLink>
			<NavLink to="/testimonial">Testimonial</NavLink>
		</nav>
	);
};

export default Menu;
