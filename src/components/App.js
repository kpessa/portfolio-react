import { useState } from 'react';
import '../css/app.module.scss';
import '../css/content.css';
import '../css/hero-jumbotron.css';
import '../css/footer.scss';

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
	const [currentPage, setCurrentPage] = useState('');

	const renderPage = () => {
		const map = new Map();
		map.set('about-me', <AboutMe />);
		map.set('portfolio', <Portfolio />);
		// map.set('resume', <Resume />);
		map.set('contact', <Contact />);

		return map.get(currentPage);
	};

	const jumbotron = (
		<section className="hero-jumbotron">
			<h1>Hi, I'm Kurt ;)</h1>
			<p>I am a full-stack web developer, pharmacist and data analyst who enjoys developing innovative products</p>
		</section>
	);

	return (
		<div className="wrapper">
			<header>
				<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</header>
			<main>
				{!currentPage && jumbotron}
				{renderPage()}
			</main>
			<Footer currentPage={currentPage} />
		</div>
	);
}

export default App;
