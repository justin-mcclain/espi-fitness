import React from "react";
import "./testimonials.scss";
import TestimonialItem from "./testimonialitem";

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
				<TestimonialItem
					body="I had a fantastic experience with the services provided. The staff was professional and attentive, and I felt a significant improvement in my mobility after just one session!"
					name="Jane Doe"/>
					<TestimonialItem
					body="The team at ESPI Fitness is amazing! They helped me recover from my injury faster than I expected, and their personalized approach made all the difference."
					name="John Smith"/>
				<TestimonialItem
					body="I highly recommend their services. The environment is welcoming, and the staff genuinely cares about your well-being. I left feeling rejuvenated and ready to take on my fitness goals."
					name="Emily Johnson"/>
				<TestimonialItem
					body="I was impressed by the level of expertise and the attention to detail. The techniques used were effective, and I noticed a marked improvement in my performance."
					name="Michael Brown"/>
			</div>
		</div>
	);
};

export default testimonials;
