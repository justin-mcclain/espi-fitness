import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div id="header" className={`header ${isSticky ? "sticky" : ""}`}>
			<div id="header-content">
				<h4 className="h4">ESPI Fitness Performance & Recovery</h4>
				<nav>
					<div id="navbar">
						<div class="h6">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "active-link" : ""
								}>
								About
							</NavLink>
						</div>
						<div class="h6">
							<NavLink
								to="/services"
								className={({ isActive }) =>
									isActive ? "active-link" : ""
								}>
								Services
							</NavLink>
						</div>
						<div class="h6">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "active-link" : ""
								}>
								Testimonials
							</NavLink>
						</div>
						<div class="h6">
							<NavLink
								to="/faq"
								className={({ isActive }) =>
									isActive ? "active-link" : ""
								}>
								FAQ
							</NavLink>
						</div>
						<div class="h6">
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive ? "active-link" : ""
								}>
								Contact
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
