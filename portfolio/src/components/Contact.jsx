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

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-800 to-purple-600 text-white py-16 text-center scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-10">📬 Contact Me</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-purple-800 hover:shadow-md cursor-pointer"
          >
            <img
              src={link.img}
              alt={link.name}
              className="w-10 h-10 mb-2 object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
            <span className="font-semibold">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
