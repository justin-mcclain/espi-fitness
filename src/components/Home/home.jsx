import React from "react";
import "./home.scss";
import heroImage from "../../assets/hero.jpg";

const Home = () => {
	return (
		<div id="home">
			<div
				id="home-hero"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
				}}>
				<h2 class="h2">Move. Preform. Recover.</h2>
				<a href="https://espifitness.square.site">
					<button>Book Now</button>
				</a>
			</div>
			<div id="mission">
				<p className="body">Our bodies are made to move!</p>

				<p className="body">
					Fortunately for us, the human body is extremely adaptive and
					resilient!
				</p>

				<p className="body">
					I found my passion in helping others achieve optimal
					wellness so they can live and feel their best and never have
					to stop doing the things they love. As a result, everyone
					can have the opportunity to experience all life has to
					offer!
				</p>

				<p className="body">
					My ultimate goal is to provide each client with the
					knowledge and resources that they can take control of their
					own health outcomes. I love empowering my clients through
					education.
				</p>

				<p className="body">
					After working with me, you will have less pain and
					discomfort, become a much better mover, more knowledgable
					about your own body, will know exactly how to mitigate
					injury, and feel overall empowered & stronger!{" "}
				</p>
			</div>
		</div>
	);
};

export default Home;
