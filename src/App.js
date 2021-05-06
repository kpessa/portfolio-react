import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import MyNavbar from './components/MyNavbar';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    const map = new Map();
    map.set('about-me', <AboutMe />);
    map.set('portfolio', <Portfolio />);
    map.set('resume', <Resume />);

    return map.get(currentPage);
  };

  return (
    <div>
      <MyNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
