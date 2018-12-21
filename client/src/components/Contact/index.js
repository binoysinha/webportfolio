import React, { Component } from 'react';
import './index.scss';
import SocialLinks from '../SocialLinks';

class Contact extends Component {
	state = {};
	render() {
		return (
			<section className="contact animated fadeIn">
				<h3>Get in touch.</h3>
				<p> Just drop a mail or say hi on any social platforms</p>
				<form className="postcard" action="">
					<div className="receiver absolute">
						<label htmlFor="r-name">To: </label>
						<input type="text" name="receiver-name" placeholder="Binoy Sinha" disabled />
					</div>
					<div className="sender absolute">
						<label htmlFor="s-name">From: </label>
						<input type="text" name="sender-name" placeholder="Your Name" />
					</div>
					<div className="reply absolute">
						<label htmlFor="t-reply">Reply: </label>
						<input type="text" name="reply-text" placeholder="Your email id" />
					</div>
					<div className="message absolute">
						<label htmlFor="t-message">Your message: </label>
						<br />
						<textarea
							name="message"
							rows="12"
							cols="50"
							placeholder="Hello! Write your message here in this fancy-schmancy Box!"
						/>
					</div>
					<div className="send-btn absolute">
						<button type="submit" name="button">
							Send your message >>>
						</button>
					</div>
				</form>
				<SocialLinks />
				{/* <p>This postcard designed inspired by Jeff Seymour CSS postcard codepen </p> */}
			</section>
		);
	}
}

export default Contact;
