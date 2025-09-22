import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MarathiSlogans from './components/MarathiSlogans';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MarathiSlogans />
      
      {/* Temple Information Group */}
      <div className="md:space-y-0 space-y-4">
        <About />
        <Services />
      </div>
      
      {/* Community & Events Group */}
      <div className="md:space-y-0 space-y-4">
        <Events />
        <Gallery />
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}