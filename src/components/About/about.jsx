import React from "react";
import "./about.scss";
import jenProfile from "../../assets/jen.jpg";

const About = () => {
	return (
		<div id="about">
			<div id="about-heading">
				<h2 className="h2">
					<strong>About</strong>
				</h2>
			</div>
			<div id="about-content">
				<img
					src={jenProfile}
					alt="Jen Espinoza"
					className="floating-image"
				/>

				<h4 className="h4">
					<i>Jennifer Espinoza MS, LMT, FRCms, NKT, CPT</i>
				</h4>
				<p class="body">
					Hola, Im Jen! I feel so much gratitude knowing that someone
					brought you to my page and I couldn’t be more excited to
					meet you and guide you in your journey towards a better
					life!
					<br />
					<br /> Here’s a little about my background - as you will
					see, I am super passionate about all things health,
					movement, and longevity.
					<br />
					<br /> I am originally from Northern VA, where I graduated
					as a double duke with a Masters & Bachelors in Health
					Science from James Madison University. After University, I
					began my career as an Adjunct Professor and full-time
					Personal Trainer at my local gym. It was in these two jobs
					that I quickly learned how our movement potential was the
					foundation to reaching our fullest potential.
					<br />
					<br /> In 2018 I relocated to Arizona for the sunshine and
					outdoor lifestyle. After MUCH debate to go back to Physical
					Therapy School or go to Massage School, I finally decided to
					go to Massage school and I’m so glad!! I now specialize in
					pain management, injury prevention, and optimizing
					performance through my unique integration of manual therapy
					& many years in the health and fitness industry.
					<br />
					<br /> I bring extensive knowledge with my higher education
					focused in Exercise Science & Nutrition and 10+ years
					working in the fitness industry. I value research driven
					techniques and lifelong learning to ensure I’m always
					providing the best practices to each client. My goal is to
					help as many people feel and move better so they are better
					equipped to eliminate chronic disease and the need for pain
					pills and surgeries - all by simply living an active
					fulfilled lifestyle!
				</p>
			</div>
		</div>
	);
};

export default About;
