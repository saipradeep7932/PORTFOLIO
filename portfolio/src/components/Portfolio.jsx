import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-br from-indigo-800 via-purple-900 to-blue-700 py-24 px-6 scroll-mt-24 overflow-hidden"
    >
      {/* Radial Glow Blobs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-400 rounded-full blur-[200px] opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[700px] h-[700px] bg-blue-500 rounded-full blur-[150px] opacity-30 pointer-events-none z-0" />

      {/* Floating Glowing Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/60 blur-md animate-bubble shadow-md"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 200}px`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
            }}
            whileHover={{ scale: 1.4, backgroundColor: '#6a5acd' }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎧 Realtime Spotify Chat
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Project Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.img
              src="/projects/spotify1.png"
              alt="Spotify Screenshot 1"
              className="rounded-2xl shadow-2xl object-cover w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <motion.img
              src="/projects/spotify2.png"
              alt="Spotify Screenshot 2"
              className="rounded-2xl shadow-2xl object-cover w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </div>

          {/* Right: Description */}
          <motion.div
            className="w-full md:w-1/2 bg-indigo-900/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Realtime Spotify Chat
            </h3>

            <div className="mb-4">
              <span className="inline-block text-sm font-semibold text-white bg-purple-600/80 px-3 py-1 rounded-full shadow">
                Tech Stack
              </span>
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                MERN (MongoDB, Express.js, React, Node.js), TypeScript, Tailwind CSS, WebSockets, Clerk Auth
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed border-t pt-4 border-white/40">
              {[
                ['🎯', 'Built a seamless Spotify-like music and chat app using TypeScript with the MERN stack.'],
                ['🗂', 'Used MongoDB for secure storage of users, playlists, and real-time chat logs.'],
                ['🎨', 'Designed interactive UI with React and Tailwind CSS for enhanced user flow.'],
                ['🔁', 'Enabled real-time interactions using WebSockets.'],
                ['🔐', 'Implemented secure authentication with Clerk and robust Express APIs.'],
                ['📊', 'Developed a custom admin dashboard to monitor songs, albums, users, and usage stats.']
              ].map(([icon, text], idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-purple-300">{icon}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://github.com/saipradeep7932/Realtime-Spotify-Chat"
                target="_blank"
                className="inline-block bg-purple-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-800 transition"
              >
                🔗 View on GitHub
              </a>
              <a
                href="https://realtime-spotify-chat-1.onrender.com/"
                target="_blank"
                className="inline-block bg-white/40 backdrop-blur text-purple-900 font-semibold px-6 py-2 rounded-md border border-purple-300 shadow hover:bg-white/60 transition"
              >
                🚀 Deployed Link
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-200px) scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-400px) scale(0.9);
            opacity: 0;
          }
        }

        .animate-bubble {
          animation-name: bubble;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}
