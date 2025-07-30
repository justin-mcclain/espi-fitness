import React from "react";
import "./contact.scss";

const Contact = () => {
	return (
		<div id="contact">
			<div id="contact-heading">
				<h2 className="h2"><strong>Contact</strong></h2>
			</div>
			<div id="contact-content">
				<form>
					<div className="row">
						<div className="col">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control form-control-lg"
									id="floatingInput"
									placeholder="test"
								/>
								<label for="floatingInput">First Name</label>
							</div>
						</div>
						<div className="col">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control form-control-lg"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">Last Name</label>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<div class="form-floating mb-3">
								<input
									type="email"
									class="form-control"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">Email address</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div class="form-floating mb-3">
								<input
									type="tel"
									maxLength={10}
									class="form-control"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label for="floatingInput">Phone</label>
							</div>
						</div>
						<div className="col">
							<div className="form-floating mb-3">
								<select
									className="form-select"
									id="floatingSelect">
									<option value="">Choose One</option>
									<option value="email">Email</option>
									<option value="phone">Call</option>
									<option value="text">Text</option>
								</select>
								<label htmlFor="floatingSelect">
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
									id="floatingTextarea"></textarea>
								<label htmlFor="floatingTextarea">
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
									id="floatingSelect">
									<option value="">Choose One</option>
									<option value="imt">
										Integrated Manual Therapy
									</option>
									<option value="ms">
										Mobility & Strength
									</option>
									<option value="imtm">
										Integrated Manual Therapy + Mobility
									</option>
									<option value="scar">
										Scar Release Treatment
									</option>
									<option value="stretch">
										Stretch Therapy
									</option>
									<option value="group">
										Small Group Strength Training
									</option>
								</select>
								<label htmlFor="floatingSelect">
									What services are you interested in?
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
