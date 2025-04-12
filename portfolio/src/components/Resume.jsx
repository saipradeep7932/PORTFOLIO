import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-20 px-4 scroll-mt-24 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 text-center text-blue-900 overflow-hidden"
    >
      {/* Left Floating Glass Box */}
      <motion.div
        className="absolute w-44 h-44 top-12 left-10 bg-white/10 border border-white/30 rounded-xl backdrop-blur-lg shadow-lg"
        animate={{
          y: [0, -20, 0, 20, 0],
          rotate: [0, 5, -5, 2, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Floating Glass Box */}
      <motion.div
        className="absolute w-52 h-52 bottom-16 right-10 bg-white/10 border border-white/30 rounded-xl backdrop-blur-lg shadow-xl"
        animate={{
          y: [0, 25, 0, -25, 0],
          rotate: [0, -4, 4, -2, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8 z-10 relative text-blue-800"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        📄 Resume
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-2xl mx-auto text-base leading-relaxed text-blue-900/90 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        I'm passionate about{" "}
        <span className="text-blue-700 font-semibold">web development</span> and love solving logical problems through{" "}
        <span className="text-blue-700 font-semibold">Data Structures & Algorithms</span>, driven by a strong love for{" "}
        <span className="text-blue-700 font-semibold">mathematics</span>.
        <br className="hidden sm:block" />
        I’m deeply curious, always exploring new technologies and frameworks, and I enjoy turning ideas into smooth, interactive, and scalable applications.
      </motion.p>

      {/* Resume Button */}
      <motion.div
        className="mt-10 z-10 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="/resume.pdf"
          download="Pradeep_Resume.pdf"
          className="inline-block px-8 py-3 bg-blue-700/90 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg transition"
        >
          ⬇️ Download My Resume
        </a>
      </motion.div>
    </section>
  );
}
