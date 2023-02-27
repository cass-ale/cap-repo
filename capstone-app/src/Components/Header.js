import React from 'react';
import Logo from "./Images/Logo.svg";
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Header() {
    const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
return (
    <>
    <header className='navbar'>
            <Link to='/'>
             <img src={Logo} alt="Little Lemon logo" id="navlogo" />
            </Link>
            <Nav />
    </header>
    </>
)
}

export default Header;