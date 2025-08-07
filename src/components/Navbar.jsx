import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from '../assets/JohnCarloPantoniaLogo.png';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, openMenu] = useState(false);

  const toggleMenu = () => openMenu(!menuOpen);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Connect", to: "connect" },
  ];

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) {
        openMenu(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <nav className="flex items-center justify-between shadow-lg px-4 relative bg-[#1b1b2f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pl-3 pr-5">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-16 w-auto" />
      </div>

      <div className="pr-14 hidden md:flex justify-center flex-1">
        <div className="flex space-x-8 border border-purple-200 bg-white/10 backdrop-blur-md rounded-full px-6 md:px-4 py-1.5 lg:py-2 text-white text-lg font-medium shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="group cursor-pointer">
                <div className="flex flex-col items-center">
                  <span className="text-white hover:text-indigo-400 transition-all">
                    {item.name}
                  </span>
                  <div className="h-[2px] w-0 bg-indigo-400 group-hover:w-full transition-all duration-300"></div>
                </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {menuOpen && (
        <div className="absolute top-20 right-4 bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-4 p-4 text-white text-center z-50">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => openMenu(false)}
              className="hover:text-gray-400 transition cursor-pointer">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
