import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const logos = [
    { name: "React", src: "/skills/react.png" },
    { name: "Node.js", src: "/skills/node.png" },
    { name: "Express", src: "/skills/express.png" },
    { name: "MongoDB", src: "/skills/mongodb.png" },
    { name: "Tailwind", src: "/skills/tailwind.png" },
    { name: "JavaScript", src: "/skills/js.png" },
    { name: "GitHub", src: "/skills/github.png" },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 scroll-mt-24 transition-colors duration-700 bg-gradient-to-br from-purple-800 via-blue-600 to-purple-900"
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        🛠 Technical Skills
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg border border-purple-300/20 rounded-[40px] p-6 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="overflow-hidden relative">

          {/* Horizontal White Line */}
          <div className="absolute top-1/2 left-0 w-full h-16 bg-white/10 blur-lg rounded-full z-0 -translate-y-1/2" />

          {/* Floating Bubbles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, idx) => (
              <span
                key={idx}
                className="bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Logo Carousel */}
          <motion.div
            className="flex gap-12 animate-slide-loop w-max items-center relative z-10"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <motion.div
                key={i}
                className="relative group flex items-center justify-center px-4"
                title={logo.name}
                whileHover={{
                  rotate: Math.random() * 20 - 10,
                  scale: 1.1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="relative z-10 max-h-20 object-contain transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bubble Animation Styles */}
      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -10px;
          width: 4px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: bubbleFloat 6s linear infinite;
        }

        @keyframes bubbleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
