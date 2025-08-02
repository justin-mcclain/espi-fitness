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
		<footer id="footer">
			<div id="footer-content">
				<div id="footer-content-upper">
					<div id="footer-section">
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
					<div id="footer-section">
						<p class="caption">Contact Us</p>
						<p class="caption">
							<MdOutlinePhoneIphone />{" "}
							<a href="tel:+15712828466">(571) 282-8466</a>{" "}
							-Call/Text
						</p>
						<p class="caption">
							<CiMail />{" "}
							<a href="mailto:jennifer@espifitness.com">
								jennifer@espifitness.com
							</a>
						</p>
						<p className="caption">
							<FiMapPin />{" "}
							<a
								href="https://maps.app.goo.gl/qvuaJp6nKA3UdKrq7"
								target="_blank"
								rel="noreferrer">
								3660 E University Dr. Unit 128 Mesa, AZ 85205
							</a>
						</p>
						<a
							href="https://espifitness.square.site"
							target="_blank"
							rel="noreferrer">
							<button>Book Now</button>
						</a>
					</div>
				</div>
				<div id="footer-content-lower">
					<div id="copy">
						<div id="socials">
							<a
								href="https://www.facebook.com/EspiFit/"
								className="social-link"
								target="_blank"
								rel="noreferrer">
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
								target="_blank"
								rel="noreferrer"
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
						<p className="caption">
							&copy; Espi-Fitness 2025. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
