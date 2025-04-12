export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-purple-100 via-purple-200 to-purple-100 py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">
          🎧 Realtime Spotify Chat
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Project Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src="/projects/spotify1.png"
              alt="Spotify Screenshot 1"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <img
              src="/projects/spotify2.png"
              alt="Spotify Screenshot 2"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Realtime Spotify Chat
            </h3>

            <div className="mb-4">
              <span className="inline-block text-sm font-semibold text-white bg-purple-600 px-3 py-1 rounded-full shadow">
                Tech Stack
              </span>
              <p className="mt-2 text-gray-800 text-sm leading-relaxed">
                MERN (MongoDB, Express.js, React, Node.js), TypeScript, Tailwind CSS, WebSockets, Clerk Auth
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-800 leading-relaxed border-t pt-4 border-gray-200">
              <div className="flex items-start gap-2">
                <span className="text-purple-700">🎯</span>
                <p>
                  Developed a full-stack music streaming and chat web application using the{' '}
                  <span className="font-semibold text-purple-700">MERN stack</span> and{' '}
                  <span className="font-semibold text-purple-700">TypeScript</span>, delivering seamless music playback and real-time user interactions.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-700">🗂</span>
                <p>
                  Leveraged <span className="font-semibold">MongoDB</span> for storing user profiles, playlists, and live chat logs, ensuring robust and secure data persistence.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-700">🎨</span>
                <p>
                  Crafted an intuitive UI with <span className="font-semibold">React</span> and{' '}
                  <span className="font-semibold">Tailwind CSS</span>, enabling smooth navigation, music controls (next/previous, volume), and chat.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-700">🔁</span>
                <p>
                  Implemented real-time features using <span className="font-semibold">WebSockets</span>, allowing users to see what others are listening to and chat live.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-700">🔐</span>
                <p>
                  Integrated secure <span className="font-semibold">Clerk authentication</span> and built robust <span className="font-semibold">REST APIs</span> with <span className="font-semibold">Express.js</span>.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-700">📊</span>
                <p>
                  Designed an exclusive <span className="font-semibold text-purple-700">Admin Dashboard</span> to monitor total songs, albums, and view all content details.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://github.com/saipradeep7932/Realtime-Spotify-Chat"
                target="_blank"
                className="inline-block bg-purple-700 text-white px-6 py-2 rounded-md shadow hover:bg-purple-800 transition"
              >
                🔗 View on GitHub
              </a>
              <a
                href="https://realtime-spotify-chat-1.onrender.com/"
                target="_blank"
                className="inline-block bg-purple-100 text-purple-900 font-medium px-6 py-2 rounded-md shadow hover:bg-purple-200 transition"
              >
                🚀 Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
