import React from "react";
import "./services.scss";
import girl from "../../assets/girl.png";

const services = () => {
	return (
		<div id="services">
			<div id="services-heading">
				<h2 className="h2">
					<strong>Services</strong>
				</h2>
			</div>
			<div id="services-content">
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">Integrated Manual Therapy</h3>
						<p className="body">
							Combining Myoskeletal Alignment technqiues,
							Structural Integration, Sports Massage & Deep Tissue
							massage to help loosen myofascial tissue, eliminate
							pain, and guide your body into a more balanced
							structure for optimal function! Tools such as
							Myofascial Cupping therapy and Guasha/Scraping also
							provided if feel needed.
						</p>
					</div>
				</div>
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">
							Functional Strength for Pain Management
						</h3>
						<p className="body">
							Strength training aimed to improve muscle imbalances
							and years of movement compensations. Building
							muscular strength will help you continue to do the
							things you love, increasing years to your life while
							keeping you injury free!{" "}
						</p>
					</div>
				</div>
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">Fascial Stretch Therapy</h3>
						<p className="body">
							This technique targets the fascial system and
							joints, treating our connective tissue and not just
							individual muscles..
						</p>
					</div>
				</div>
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">Mobility Training</h3>
						<p className="body">
							This is where flexibility meets strength! Experience
							improved joint function, injury prevention, and less
							overall pain by training your joints using
							Functional Range Conditioning (FRC) principles.{" "}
						</p>
					</div>
				</div>
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">Nuerokinetic Therapy</h3>
						<p className="body">
							A corrective movement system using manual muscle
							testing to assess & rehabilitate acute & chronic
							injuries. Based on relational inhibition, this
							system eliminates muscular compensations and
							replaces them with appropriate sequencing of
							movement, creating long-lasting results. Each client
							is sent home with an effective individualized
							exercise program most effectively used with their
							current exercise program.
						</p>
					</div>
				</div>
				<div className="service-item">
					<img src={girl} />
					<div>
						<h3 className="h3">Scar Tissue Release</h3>
						<p className="body">
							Scars (internal & external) have been shown to
							disrupt the proper flow of electrical energy,
							oxygen, blood, lymph and nerve pathways throughout
							the body. This causes a variety of health problems
							such as chronic pain, autoimmune, and a host of
							other diseases. Scars develop deep roots of chaotic
							fibers and can effect every system of our body if
							left untreated. We use SRT to loosen up adhesions &
							get rid of scar tissue whether from recent or old
							surgeries, traumatic event, or cosmetic
							augmentations.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
