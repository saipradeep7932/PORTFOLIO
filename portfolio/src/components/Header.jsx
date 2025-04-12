export default function Header() {
  const toggleChat = (e) => {
    e.preventDefault();
    const event = new CustomEvent("toggleChatBot");
    window.dispatchEvent(event);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Portfolio Name */}
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Sai Pradeep's Personal Portfolio
        </h1>

        {/* Right: Boxed nav with one rounded edge */}
        <div className="bg-white text-gray-900 rounded-bl-2xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
          <ul className="flex gap-6 items-center">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Resume", href: "#resume" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="text-sm font-medium hover:text-purple-700 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* 🧠 Chat toggle */}
            <li>
              <a
                href="#"
                onClick={toggleChat}
                className="text-sm font-medium hover:text-purple-700 transition-colors"
              >
                Chat
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
