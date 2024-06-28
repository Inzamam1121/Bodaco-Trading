
import React, { useState, useEffect } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollTop >= windowHeight * 0.2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

      <header>
        <nav
          className={`top-0 w-full transition-all duration-300 ${isScrolled
            ? "bg-white text-[#2f803f] fixed top-0 shadow-lg z-50"
            : "bg-black/50 text-white relative z-30"
            }`}
        >
          <div className="container mx-auto w-[90%] h-[15vh] flex justify-between items-center p-4">
            <div className="text-2xl font-bold text-black">
              {isScrolled ? (
                <img
                  src="https://www.banalat.com/images/logo-black-bn.svg"
                  alt="profile"
                />
              ) : (
                <img src="../Images/Navbar.png" alt="profile" />
              )}
            </div>
            <div className="hidden md:flex gap-12 uppercase font-lato">
              <a href={"#"}>
                <li className="text-sm list-none">Home</li>
              </a>
              <a href={"#about"}>
                <li className="text-sm list-none">ABOUT US</li>
              </a>
              <a href={"#service"}>
                <li className="text-sm list-none">OUR SERVICES</li>
              </a>
              <a href={"#product"}>
                <li className="text-sm list-none">OUR PRODUCTS</li>
              </a>
              <a href={"#contact"}>
                <li className="text-sm list-none">Contacts</li>
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <MdClose size={24} className="text-[#2f803f]" />
                ) : (
                  <MdMenu size={24} className="text-white" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black/70 z-50">
              <div className="fixed right-0 top-0 w-2/3 h-full bg-white shadow-lg p-8">
                <div className="flex justify-between  mb-6">
                  <ul className="flex flex-col gap-6 text-[#2f803f] uppercase font-lato">
                    <a href={"#"}>
                      <li className="text-sm">Home</li>
                    </a>
                    <a href={"#about"}>
                      <li className="text-sm">ABOUT US</li>
                    </a>
                    <a href={"#service"}>
                      <li className="text-sm">OUR SERVICES</li>
                    </a>
                    <a href={"#product"}>
                      <li className="text-sm">OUR PRODUCTS</li>
                    </a>
                    <a href={"#contact"}>
                      <li className="text-sm">Contacts</li>
                    </a>
                  </ul>
                  <MdClose
                    size={24}
                    className="text-[#2f803f] ml-4 cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
