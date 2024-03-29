import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

class SignUpModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal className="sign-up-modal" isOpen={this.props.openModal} contentLabel="Modal for Sign up form">
				<form>
					<h3>
						<label htmlFor="username">Username:</label>
					</h3>
					<input type="text" id="username" placeholder="Add a unique username" required />
					<h3 className="email-id">Email-id:</h3>
					<input type="email" id="email-id" placeholder="Add your email id" required />
					<h3 className="password">Password:</h3>
					<input type="passoword" id="password" placeholder="Keep a strong password" required />
					<button onSubmit={this.props.closeModal}>Sign me up!</button>
					<button onClick={this.props.closeModal}>Cancel</button>
				</form>

				<p>
					Already a member? <button onClick={this.props.swapModal}>Sign in here</button>
				</p>
			</Modal>
		);
	}
}

SignUpModal.propTypes = {
	openModal: PropTypes.bool,
	closeModal: PropTypes.func
};

export default SignUpModal;
