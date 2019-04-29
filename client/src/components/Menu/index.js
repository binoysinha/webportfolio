import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/img/logo.png';

class Menu extends Component {
	state = {
		toggleState: false,
		selectedMenu: ''
	};
	toggleMenu = evt => {
		let selectedMenu = this.state.selectedMenu;
		if (evt.target.nodeName === 'IMG') {
			selectedMenu = '';
		}
		if (evt.target && evt.target.text) {
			selectedMenu = evt.target.text;
		}
		this.setState(prevState => ({
			toggleState: !prevState.toggleState,
			selectedMenu: selectedMenu
		}));
	};
	render() {
		let { toggleState, selectedMenu } = this.state;
		return (
			<>
				<div className="menu-wrapper">
					<div className="top-bar" onClick={this.toggleMenu}>
						<div className="selected-menu">{selectedMenu}</div>
						{/* <i className="toggle-btn fa fa-bars fa-2x" /> */}
						<div className={`nav-icon ripple ${toggleState ? 'open' : ''}`}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<nav
						id="main"
						className={`nav-menu ${toggleState ? 'expand' : ''}`}
						onClick={this.toggleMenu}
						style={{
							height: toggleState ? `300px` : '0px'
						}}
					>
						<NavLink to="/" className="logo">
							<img src={Logo} alt="binoy sinha" />
						</NavLink>
						<NavLink to="/skills">Skills</NavLink>
						<NavLink to="/projects">Projects</NavLink>
						<NavLink to="/career">Career</NavLink>
						<NavLink to="/contact">Contact Me</NavLink>
						{/* <a
							href="https://res.cloudinary.com/vmina/image/upload/v1546006627/BinoySinhaResume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="resume"
							download="Binoy Sinha Resume"
						>
							Resume
						</a> */}
					</nav>
				</div>
			</>
		);
	}
}

export default Menu;
