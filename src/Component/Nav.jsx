import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const nav = document.getElementById('nav');
    if (nav) {
      const navTop = nav.offsetTop;
      setIsSticky(offset > navTop);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={`bg-white shadow-shadownav w-full py-4 px-4 md:px-10 lg:px-20 ${isSticky ? 'fixed top-0 left-0 z-50' : ''}`}
    >
      <div className="flex gap-4 items-center justify-center font-major text-xl font-semibold">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact us</a>
      </div>
    </div>
  );
};

export default Nav;
