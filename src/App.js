import { useState } from 'react';
import './App.css';
import './App-Content.css';

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

  return (
    <div>
      <header>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
