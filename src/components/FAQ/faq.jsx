import React from "react";
import "./faq.scss";

//possibly make faq-item a component for cms use later tbd

const faq = () => {
	return (
		<div id="faq">
			<div id="faq-heading">
				<h2 className="h2">
					<strong>FAQ</strong>
				</h2>
			</div>
			<div id="faq-content">
				<div className="faq-item">
					<h5 className="h5">What should I wear?</h5>
					<p className="body">
						<span>Males:</span> Exercise shorts & t-shirt.
						<br />
						<br />
						<span>Females:</span> Exercise shorts and a sports bra
						or bathing suit top (preferably one with the least
						amount of straps in the back to be able to access the
						most tissue or tank top that is easy to maneuver).
					</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">What session durations do you offer?</h5>
					<p className="body">
						Sessions vary from 45 min to 2 hours depending on the
						goal! Shorter sessions might be directed toward just
						mobility work or spot specific treatment. Longer
						sessions are preferred for those experiencing pain or
						want a mix of massage and mobility, or massage and
						stretch therapy. After the initial assessment, I will be
						able to provide you with better idea of which would work
						best for you.
					</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">Is cupping an additional fee?</h5>
					<p className="body">
						No! I include all the techniques and tools I use in the
						price. I don’t believe in up-charging for tools or
						pressure like many other therapists; I believe in
						providing the best results for my clients independent of
						what I use to help bring you results.
					</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">What does the first session entail?</h5>
					<p className="body">
						Your 1st session is 90 min and includes: postural
						assessment, passive and active movement assessments,
						thorough medical history, goal setting + treatment time.
						Ask about the first time client discount!
					</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">Do you accept HSA/FSA?</h5>
					<p className="body">Yes!</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">How often should I come in?</h5>
					<p className="body">
						If dealing with a chronic issue, I typically will
						recommend 1x/week until we see tissue change, then move
						to every 2 or 3 weeks until we reach our goals!
						Throughout our sessions, I provide mobility homework for
						you to do between sessions. This will help tissue
						correction as well as helping to allow more time in
						between sessions.
						<br />
						<br />
						If the goal is recovery or maintenance, typically every
						2-3 weeks will help to improve performance and mitigate
						injury.
						<br />
						<br />
						Everyone’s body & situation is different, so this can
						vary.
					</p>
				</div>
				<div className="faq-item">
					<h5 className="h5">
						Do you offer memberships or packages?
					</h5>
					<p className="body">
						I believe memberships are often created by businesses
						just for your reoccurring revenue and not for the best
						interest of the client. I know when I was “stuck” in a
						membership it was always difficult to get out of. That
						is not my goal, my goal is to get you better. Instead, I
						offer 5 & 10 session packs which helps you bundle & save
						if you decide you want to establish a health plan. These
						are to be used within one calendar year of purchase so
						if you only use 4 sessions out of 10 aimed towards your
						current issue, you still have 6 you can use for
						maintenance work! I can assure you they will never go to
						waste!
					</p>
				</div>
			</div>
		</div>
	);
};

export default faq;
