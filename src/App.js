import { useState } from 'react';
import './App.css';
import './App-Content.css';
import './css/hero-jumbotron.css'

import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact'
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    const map = new Map();
    map.set('about-me', <AboutMe />);
    map.set('portfolio', <Portfolio />);
    map.set('resume', <Resume />);
    map.set('contact', <Contact />);

    return map.get(currentPage);
  };

  const jumbotron = <section className='hero-jumbotron'>
    <h1>Hi, I'm Kurt ;)</h1>
    <p>I am a full-stack web developer, pharmacist and data analyst whoe enjoys developing innovative products</p>
  </section>

  return (
    <div>
      <header>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      {!currentPage && jumbotron}
      {renderPage()}
      <footer>Copyright KP&copy; 2021</footer>
    </div>
  );
}

export default App;
