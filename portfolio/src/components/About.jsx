import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 py-20 px-6 scroll-mt-24 relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: mousePosition.x ? (mousePosition.x / 50) * (particle.id % 5 - 2) : 0,
            y: mousePosition.y ? (mousePosition.y / 50) * (particle.id % 5 - 2) : 0,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Side */}
        <motion.div 
          className="w-full md:w-2/5 text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-400 to-purple-700 p-8 rounded-2xl shadow-2xl mx-auto max-w-sm relative"
            whileHover={{ 
              rotateY: mousePosition.x ? (mousePosition.x / 500) * 10 - 5 : 0,
              rotateX: mousePosition.y ? -((mousePosition.y / 500) * 10 - 5) : 0
            }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <motion.img
              src="/logo.png"
              alt="Pradeep Logo"
              className="w-40 h-40 mx-auto rounded-full object-contain bg-purple-100/10 p-2"
              whileHover={{ scale: 1.05, rotate: 5 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.h3
              className="text-xl font-bold text-white mt-6 inline-block"
              whileHover={{ y: [-5, -20, 0], transition: { duration: 0.6 } }}
            >
              Sai Pradeep
            </motion.h3>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className="w-full md:w-3/5 text-center md:text-left relative"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/10"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              👋 Hi, I'm{' '}
              <span className="text-purple-300">
                <Typewriter
                  words={['Sai Pradeep', 'a MERN Developer', 'a Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-purple-100 text-lg leading-relaxed mt-4">
              I am a <span className="text-white font-semibold">MERN stack developer</span> who thrives on
              <span className="text-white font-semibold"> crafting innovative solutions</span>,
              loves <span className="text-white font-semibold">exploring new technologies</span>,
              and gets excited about <span className="text-white font-semibold">turning complex problems into simple solutions</span>.
              My curiosity drives me to continuously learn, build, and push the boundaries of what's possible on the web.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
              </motion.a>

              <motion.a
                href="#resume"
                className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-medium backdrop-blur-sm hover:bg-white/20 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
