import React from "react";
import "./testimonials.scss";

const TestimonialItem = ({ body, name }) => {
	return (
		<div className="testimonial-item">
			<p id="testimonial-body">{body}</p>
			<div id="testimonial-author">
				<h3 className="h3">
					-<span>{name}</span>
				</h3>
			</div>
		</div>
	);
};

export default TestimonialItem;
