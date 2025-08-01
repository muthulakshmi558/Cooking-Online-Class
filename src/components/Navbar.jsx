import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROGRAMS", path: null },
    { name: "COURSES", path: "/courses" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-[#FFF4E6] font-[Poppins] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-3 group cursor-pointer">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            className="h-[110px] w-auto rounded-full"
          />
        </Link>

        <div className="hidden md:flex space-x-8 text-[#5C4033] font-medium relative">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.name === "PROGRAMS" ? (
                <span className="flex items-center transition duration-300 group-hover:text-[#A7C957]">
                  {item.name}
                  <span className="ml-1">▼</span>
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="cursor-pointer transition duration-300 hover:text-[#A7C957] flex items-center"
                >
                  {item.name}
                </Link>
              )}

              {item.name === "PROGRAMS" && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Link
                    to="/bakery"
                    className="block px-4 py-2 text-sm text-[#5C4033] hover:bg-[#FFF4E6] hover:text-[#A7C957]"
                  >
                    Bakery Business Accelerator Program
                  </Link>
                  <Link
                    to="/cloud"
                    className="block px-4 py-2 text-sm text-[#5C4033] hover:bg-[#FFF4E6] hover:text-[#A7C957]"
                  >
                    Cloud Kitchen Accelerator
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <Link to="/login">
            <button className="bg-[#D57A66] text-white px-4 py-1 rounded-full font-semibold transition duration-300 hover:bg-[#e8927a] hover:text-white">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
