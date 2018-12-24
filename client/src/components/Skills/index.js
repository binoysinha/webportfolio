import React, { Component } from 'react';
import './index.scss';
import BarLines from './BarLines';
import { SKILLS_ICON, SKILLS_SET, SKILL_CATEGORY } from '../../Constant';

const LI = ({ onClick, tab, isActive }) => (
	<li className={isActive} onClick={onClick}>
		{tab}
	</li>
);

class Skills extends Component {
	state = {
		selectedTab: 'Frontend'
	};

	changeTab = evt => {
		let selectedTab = evt.target.innerText;
		this.setState(() => ({
			selectedTab
		}));
	};
	render() {
		let { selectedTab } = this.state;
		const elem = SKILLS_ICON.map((item, idx) => (
			<span key={idx} className={`s${idx}`}>
				<i className={`fab ${item}`} />
			</span>
		));

		const skillTabs = SKILL_CATEGORY.map((item, idx) => (
			<LI isActive={selectedTab === item ? 'animated active' : ''} key={idx} onClick={this.changeTab} tab={item} />
		));
		return (
			<section className="skill-container animated fadeIn">
				<div className="upper-row">
					<div className="skills-icon">
						<div className="smoke">{elem}</div>
					</div>
					<div className="quote">
						<blockquote>"It is possible to fly without motors, but not without knowledge and skill."</blockquote>
						<p>Wilbur Wright</p>
					</div>
				</div>

				<ul className="skill-tab">{skillTabs}</ul>
				{selectedTab !== 'Misc' ? (
					<div className="skill-wrapper">
						<BarLines data={SKILLS_SET[selectedTab]} />
						<div className="skills-desc">
							<h3 className="skill-smry">Brief description</h3>
							{SKILLS_SET.desc[selectedTab]}
						</div>
					</div>
				) : (
					<RandomSkills />
				)}
			</section>
		);
	}
}

const RandomSkills = () => (
	<div className="misc-skills">
		<ul className="fa-ul mb-0">
			<li>
				<i className="fa-li fa fa-trophy text-warning" />
				Awarded Red Spot and Emmy awards in Inmobi.
			</li>
			<li>
				<i className="fa-li fa fa-trophy text-warning" />
				Awarded Trailblazer award in Redbus.
			</li>
			<li>
				<i className="fa-li fa fa-trophy text-warning" />
				Recognized by clients several times during my stint in TCS.
			</li>
			<li>
				<i className="fa-li fa fa-trophy text-warning" />
				Recognized with Shinning star award during TCS training.
			</li>
			<li>
				<i className="fa-li fa fa-trophy text-warning" />
				Apart from this, won many quiz competition during my school and college days.
			</li>
		</ul>
	</div>
);

export default Skills;
