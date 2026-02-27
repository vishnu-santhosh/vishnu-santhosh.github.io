import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BootSequence from './components/BootSequence';
import Home from './pages/Home';
import Writing from './pages/Writing';
import Article from './pages/Article';
import About from './pages/About';
import articles from './data/articles.json';

export default function App() {
  const [booted, setBooted] = useState(() => {
    return sessionStorage.getItem('bootComplete') === 'true';
  });

  useEffect(() => {
    if (booted) {
      sessionStorage.setItem('bootComplete', 'true');
    }
  }, [booted]);

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/articles" element={<Writing />} />
        <Route path="/articles/:slug" element={<Article articles={articles} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
