import React, { Component } from 'react';
import './index.scss';
import SocialLinks from '../SocialLinks';
import MailRecivedImg from '../../assets/img/mail-recieved.png';
import Resume from '../../assets/resume.pdf';

class Contact extends Component {
	state = {
		message: '',
		senderEmail: '',
		senderName: '',
		mailView: true
	};

	handleChange = evt => {
		let name = evt.target.name;
		let value = evt.target.value;
		this.setState({
			[name]: value
		});
	};

	sendmailHandler = evt => {
		evt.preventDefault();
		const formValue = this.state;

		fetch('/api/sendmail', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formValue)
		}).then(response => {
			this.setState({
				mailView: false
			});
			return response.json();
		});
	};

	mailFlipHandler = () => {
		this.setState({
			mailView: false
		});
	};
	render() {
		let { message, senderEmail, senderName, mailView } = this.state;
		return (
			<section className="contact animated fadeIn">
				<h3>Get in touch.</h3>
				<SocialLinks />
				{/* <a href={Resume} download="Binoy Sinha Resume">
					Resume
				</a> */}
				<div className="or">
					<p>OR</p>
				</div>
				<hr />
				<div className="flip-card">
					<div className={`flip-card-inner ${mailView ? '' : 'flip'}`}>
						<form className="postcard flip-card-front" id="postcard" onSubmit={this.sendmailHandler}>
							<div className="receiver absolute">
								<label htmlFor="r-name">To: </label>
								<input type="text" name="receiver-name" placeholder="Binoy Sinha" disabled />
							</div>
							<div className="sender absolute">
								<label htmlFor="s-name">Name: </label>
								<input
									type="text"
									name="senderName"
									value={senderName}
									placeholder="Your Name"
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="reply absolute">
								<label htmlFor="t-reply">Email: </label>
								<input
									type="email"
									name="senderEmail"
									value={senderEmail}
									placeholder="Your email id"
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="message absolute">
								<label htmlFor="t-message">Your message: </label>
								<br />
								<textarea
									name="message"
									placeholder="Write your message here."
									value={message}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="send-btn absolute">
								<button type="submit" name="button" className="send-mail-btn">
									Send your message >>>
								</button>
							</div>
						</form>
						<div className="flip-card-back">
							<img src={MailRecivedImg} className="mail-img" alt="mail-recieved" />
							<h3>Message received. Thanks!</h3>
							<p>I 'll be in touch with you shortly</p>
							<button onClick={this.mailFlipHandler} className="mail-again-btn">
								Mail again
							</button>
						</div>
					</div>
				</div>

				{/* <p>This postcard designed inspired by Jeff Seymour CSS postcard codepen </p> */}
			</section>
		);
	}
}

export default Contact;
