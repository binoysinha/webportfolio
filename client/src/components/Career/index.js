import React, { Component } from 'react';

import './index.scss';
import Img1 from '../../assets/img/inmobi.png';
import Img2 from '../../assets/img/redbus.png';
import Img3 from '../../assets/img/tcs.png';

const Career = ({ callback }) => {
	callback();
	return (
		<section className="career-sctn">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">About</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<ul className="timeline">
							<li>
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src={Img1} alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>April 2018</h4>
										<h4 className="subheading">Inmobi</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
											reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
											laudantium consectetur!
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src={Img2} alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Aug 2016 - April 2018</h4>
										<h4 className="subheading">Redbus</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
											reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
											laudantium consectetur!
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className="timeline-image">
									<img className="rounded-circle img-fluid" src={Img3} alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>March, 2012 - August, 2016</h4>
										<h4 className="subheading">Tata Consultancy Services</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
											reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
											laudantium consectetur!
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<i className="fas fa-user-graduate" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>2011 PassOut</h4>
										<h4 className="subheading">My humble Journey begins</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
											reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
											laudantium consectetur!
										</p>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<h4>
										Be Part
										<br />
										Of Our
										<br />
										Story!
									</h4>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Career;
