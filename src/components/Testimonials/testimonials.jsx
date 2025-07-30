import React from "react";
import "./testimonials.scss";

const testimonials = () => {
	return (
		<div id="testimonials">
			<div id="testimonials-heading">
				<h2 className="h2">
					{" "}
					<strong>Testimonials</strong>
				</h2>
			</div>
			<div id="testimonials-content">
				<div className="testimonial-item">
					<p className="body">
						"I had a fantastic experience with the services
						provided. The staff was professional and attentive, and
						I felt a significant improvement in my mobility after
						just one session!"
					</p>
					<p className="author">- Jane Doe</p>
				</div>
				<div className="testimonial-item">
					<p className="body">
						"The personalized approach to my fitness needs has been
						a game-changer. I highly recommend their services to
						anyone looking to improve their health and well-being."
					</p>
					<p className="author">- John Smith</p>
				</div>
			</div>
		</div>
	);
};

export default testimonials;
