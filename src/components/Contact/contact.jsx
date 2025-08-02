import React from "react";
import "./contact.scss";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		contactMethod: "",
		message: "",
		howDidYouHear: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			contactMethod: "",
			message: "",
			howDidYouHear: "",
		});
		console.log("Form submitted:", formData);
	};

	return (
		<div id="contact">
			<div id="contact-heading">
				<h2 className="h2">
					<strong>Contact</strong>
				</h2>
			</div>
			<div id="contact-content">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col">
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control form-control-lg"
									name="firstName"
									value={formData.firstName}
									placeholder="First Name"
									onChange={handleChange}
								/>
								<label htmlFor="firstName">First Name</label>
							</div>
						</div>
						<div className="col">
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control form-control-lg"
									name="lastName"
									value ={formData.lastName}
									placeholder="Last Name"
									onChange={handleChange}
								/>
								<label htmlFor="lastName">Last Name</label>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control"
									name="email"
									value={formData.email}
									placeholder="name@example.com"
									onChange={handleChange}
								/>
								<label htmlFor="email">Email address</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="form-floating mb-3">
								<input
									type="tel"
									maxLength={10}
									className="form-control"
									name="phone"
									value={formData.phone}
									placeholder="Phone"
									onChange={handleChange}
								/>
								<label htmlFor="phone">Phone</label>
							</div>
						</div>
						<div className="col">
							<div className="form-floating mb-3">
								<select
									className="form-select"
									onChange={handleChange}
									value={formData.contactMethod}
									name="contactMethod">
									<option value=""></option>
									<option value="email">E-mail</option>
									<option value="phone">Call</option>
									<option value="text">Text</option>
								</select>
								<label htmlFor="contactMethod">
									Preferred contact method
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="form-floating mb-3">
								<textarea
									className="form-control"
									placeholder="Leave a comment here"
									onChange={handleChange}
									value={formData.message}
									name="message"></textarea>
								<label htmlFor="message">
									Tell us your story - be detailed
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="form-floating mb-3">
								<select
									className="form-select"
									name="howDidYouHear"
									value={formData.howDidYouHear}
									onChange={handleChange}>
									<option value=""></option>
									<option value="google">Google</option>
									<option value="social">Social Media</option>
									<option value="friend">
										Word of Mouth
									</option>
								</select>
								<label htmlFor="services">
									How did you hear about us?
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<button type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
