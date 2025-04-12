import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <section
    id="about"
    className="bg-gradient-to-b from-purple-100 via-purple-300 to-purple-100 py-20 px-6 scroll-mt-24"
  >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src="/logo.png"
            alt="Pradeep Logo"
            className="w-52 h-52 mx-auto rounded-full object-contain shadow-md"
          />
          <p className="text-sm text-gray-500 mt-4">Developer • Learner • Innovator</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 text-center md:text-left bg-purple-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">
            👋 Hi, I’m{' '}
            <span className="text-purple-900">
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

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            I am a <span className="text-purple-700 font-semibold">MERN stack developer</span> who loves
            building <span className="text-purple-700 font-semibold">innovative solutions</span> and solving
            <span className="text-purple-700 font-semibold"> challenging problems</span>. I enjoy transforming ideas into 
            <span className="text-purple-700 font-semibold"> scalable, user-friendly applications</span> while staying updated with the latest technologies.
            <br /><br />
            <span className="text-purple-700 font-semibold">Collaboration</span> and 
            <span className="text-purple-700 font-semibold"> continuous learning</span> fuel my journey. Let’s connect and build something amazing!
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
