export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-20 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-purple-700 mb-8">📄 Resume</h2>

      <p className="text-gray-800 max-w-2xl mx-auto text-base leading-relaxed px-4">
        I'm passionate about <span className="text-purple-700 font-semibold">web development</span> and love solving logical problems through{' '}
        <span className="text-purple-700 font-semibold">Data Structures & Algorithms</span>, fueled by my strong interest in{' '}
        <span className="text-purple-700 font-semibold">mathematics</span>.
        <br className="hidden sm:block" />
        I enjoy building clean, scalable, and user-friendly applications, and I’m always excited to take on new technical challenges that push me to grow.
      </p>

      <div className="mt-8">
        <a
          href="/resume.pdf"
          download="Pradeep_Resume.pdf"
          className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-800 transition"
        >
          ⬇️ Download My Resume
        </a>
      </div>
    </section>
  );
}
