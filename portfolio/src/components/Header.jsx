import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Optional: install lucide-react or use other icons

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleChat = (e) => {
    e.preventDefault();
    const event = new CustomEvent("toggleChatBot");
    window.dispatchEvent(event);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Project", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Chat", href: "#", onClick: toggleChat }
  ];

  return (
    <motion.header 
      className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <motion.h1 
          className="text-xl md:text-2xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          Sai Pradeep's Portfolio
        </motion.h1>

        {/* Right: Desktop Nav */}
        <motion.ul 
          className="hidden md:flex bg-white text-gray-900 rounded-bl-2xl px-6 py-3 shadow-sm gap-6 items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3, when: "beforeChildren", staggerChildren: 0.1 }}
        >
          {navItems.map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1 }}>
              <a 
                href={item.href} 
                onClick={item.onClick}
                className="text-sm font-medium transition-colors px-3 py-1 rounded-md hover:text-purple-700"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.ul 
          className="flex flex-col md:hidden bg-white text-gray-900 mt-3 px-4 py-2 rounded-xl space-y-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a 
                href={item.href} 
                onClick={(e) => {
                  item.onClick ? item.onClick(e) : null;
                  setIsMobileMenuOpen(false); // close after click
                }}
                className="block text-sm font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
