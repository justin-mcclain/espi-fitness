import React from "react";
import "./footer.scss";
import fbIcon from "../../assets/fb.png";
import igIcon from "../../assets/ig.png";
import igIconWhite from "../../assets/ig-white.png";
import fbIconWhite from "../../assets/fb-white.png";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

export const Footer = () => {
	return (
		<div id="fix">
			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.0018826004457!2d-111.75428502359847!3d33.423195273400324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba917d330ce6b%3A0x93a39ce5b8f64cc5!2sESPI%20Fitness%20Performance%20%26%20Recovery!5e0!3m2!1sen!2sus!4v1753718255081!5m2!1sen!2sus"
				width="50%"
				height="350"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				title="Google Maps Embed"
				referrerpolicy="no-referrer-when-downgrade"></iframe> */}
			<footer id="footer">
				<div id="footer-content">
					<div>
						<p class="caption">Hours</p>
						<p class="caption">Monday: 9-3 PM</p>
						<p class="caption">Tuesday: Closed</p>
						<p class="caption">Wednesday: 9-3 PM</p>
						<p class="caption">Thursday: 9-3 PM</p>
						<p class="caption">Friday: 9-3 PM</p>
						<p class="caption">Saturday: Closed</p>
						<p class="caption">Sunday: 7:30-2PM</p>
					</div>
				</div>
				<div id="footer-content">
					<p class="caption">Contact Us</p>
					<p class="caption">
						<MdOutlinePhoneIphone />{" "}
						<a href="tel:+15712828466">(571) 282-8466</a> -Call/Text
					</p>
					<p class="caption">
						<CiMail />{" "}
						<a href="mailto:jennifer@espifitness.com">
							jennifer@espifitness.com
						</a>
					</p>
					<p className="caption">
						<FiMapPin />{" "}
						<a href="https://maps.app.goo.gl/qvuaJp6nKA3UdKrq7">
							3660 E University Dr. Unit 128 Mesa, AZ 85205
						</a>
					</p>
					<a href="https://espifitness.square.site">
						<button>Book Now</button>
					</a>
					<div id="socials">
						<a
							href="https://www.facebook.com/EspiFit/"
							className="social-link">
							<img
								src={fbIconWhite}
								alt="Facebook"
								className="social-white"
							/>
							<img
								src={fbIcon}
								alt="Facebook"
								className="social-color"
							/>
						</a>
						<a
							href="https://www.instagram.com/espfit_"
							className="social-link">
							<img
								src={igIconWhite}
								alt="Instagram"
								className="social-white"
							/>
							<img
								src={igIcon}
								alt="Instagram"
								className="social-color"
							/>
						</a>
					</div>
				</div>
			</footer>
			<p className="caption">
				&copy; Espi-Fitness 2025. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
