import { motion } from 'framer-motion';

export default function Contact() {
  const links = [
    {
      name: 'GitHub',
      href: 'https://github.com/saipradeep7932',
      img: '/contact/github.png',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sai-pradeep-2050a728a/',
      img: '/contact/linkedin.png',
    },
    {
      name: 'Email',
      href: 'mailto:2022eeb1199@iitrpr.ac.in',
      img: '/contact/email.png',
    },
  ];

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0],
        when: "beforeChildren",
        staggerChildren: 0.2
      } 
    }
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      } 
    }
  };

  // Container animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      } 
    },
    hover: { 
      scale: 1.1, 
      rotate: 5, 
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "#6b21a8", // purple-800
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-br from-purple-800 to-purple-600 text-white py-16 text-center scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.h2 
        className="text-3xl font-bold mb-10"
        variants={titleVariants}
      >
        📬 Contact Me
      </motion.h2>
      
      <motion.div 
        className="flex justify-center gap-8 flex-wrap"
        variants={containerVariants}
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 cursor-pointer"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.img
              src={link.img}
              alt={link.name}
              className="w-10 h-10 mb-2 object-contain transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <span className="font-semibold">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}