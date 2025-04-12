import { motion } from 'framer-motion';

export default function Header() {
  const toggleChat = (e) => {
    e.preventDefault();
    const event = new CustomEvent("toggleChatBot");
    window.dispatchEvent(event);
  };

  // Header animation variant
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  // Logo animation variant
  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  // Navigation container animation
  const navContainerVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Link item animation
  const linkItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    },
    hover: { 
      scale: 1.1, 
      color: "#7e22ce", // purple-700
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Portfolio Name */}
        <motion.h1 
          className="text-xl md:text-2xl font-bold text-white"
          variants={logoVariants}
        >
          Sai Pradeep's Personal Portfolio
        </motion.h1>

        {/* Right: Boxed nav with one rounded edge */}
        <motion.div 
          className="bg-white text-gray-900 rounded-bl-2xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
          variants={navContainerVariants}
        >
          <ul className="flex gap-6 items-center">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Resume", href: "#resume" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
            ].map((item, i) => (
              <motion.li key={i} variants={linkItemVariants}>
                <motion.a
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  whileHover="hover"
                >
                  {item.name}
                </motion.a>
              </motion.li>
            ))}

            {/* 🧠 Chat toggle */}
            <motion.li variants={linkItemVariants}>
              <motion.a
                href="#"
                onClick={toggleChat}
                className="text-sm font-medium transition-colors"
                whileHover="hover"
              >
                Chat
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}