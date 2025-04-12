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

  return (
    <section
  id="skills"
  className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100 py-20 text-center scroll-mt-24"
>
  <h2 className="text-4xl font-bold text-blue-800 mb-10">🛠 Technical Skills</h2>


      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-xl rounded-[40px] p-6 border border-purple-200">
          <div className="overflow-hidden">
            <div className="flex gap-10 animate-slide-loop w-max items-center">
              {logos.concat(logos).map((logo, i) => (
                <div key={i} className="flex items-center justify-center px-3" title={logo.name}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
