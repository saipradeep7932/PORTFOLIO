import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FloatingChatBot from './components/FloatingChatBot'; // 👈 NEW

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 relative">
      <Header />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <FloatingChatBot /> {/* 👈 Add this only ONCE here */}
    </div>
  );
}
