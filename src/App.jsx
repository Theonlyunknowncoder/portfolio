import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import CoderSection from './components/CoderSection';
import Transition from './components/Transition';
import CreatorSection from './components/CreatorSection';
import PhotoGallery from './components/PhotoGallery';
import ReelShowcase from './components/ReelShowcase';
import Extracurricular from './components/Extracurricular';
import About from './components/About';
import Contact from './components/Contact';
import EventsPage from './components/EventsPage';
import './styles/base.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Education />
        <CoderSection />
        <Extracurricular />
        <Transition />
        <CreatorSection />
        <PhotoGallery />
        <ReelShowcase />
        <About />
        <Contact />
      </main>
      <footer className="scroll-footer container">
        <p>Designed & Built with ❤️ • © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);



  return (
    <>
      <ScrollProgress />
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}

export default App;
