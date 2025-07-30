import "./App.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Testimonials from "./components/Testimonials/testimonials";
import FAQ from "./components/FAQ/faq";
import Contact from "./components/Contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<main id="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/faq" element={<FAQ />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/testimonials" element={<Testimonials />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
