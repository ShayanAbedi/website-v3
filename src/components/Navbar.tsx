import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-[var(--navy)] text-[var(--slate)]">
      <div>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '80px',
          }}
        />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex items-center">
        <li className="hover:text-[var(--green)] duration-300">
          <span className="text-[var(--green)] ">01. </span>About
        </li>
        <li className="hover:text-[var(--green)] duration-300">
          <span className="text-[var(--green)]">02. </span>Experience
        </li>
        <li className="hover:text-[var(--green)] duration-300">
          <span className="text-[var(--green)]">03. </span>Work
        </li>
        <li className="hover:text-[var(--green)] duration-300">
          <span className="text-[var(--green)]">04. </span>Contact
        </li>
        <li className="hover:text-[var(--green)] duration-300">
          <button>Resume</button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[var(--navy)] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <span className="text-[var(--green)]">01. </span>About
        </li>
        <li className="py-6 text-4xl">
          <span className="text-[var(--green)]">02. </span>Experience
        </li>
        <li className="py-6 text-4xl">
          <span className="text-[var(--green)]">03. </span>Work
        </li>
        <li className="py-6 text-4xl">
          <span className="text-[var(--green)]">04. </span>Contact
        </li>
        <li className="py-6 text-4xl">
          <button className="border-solid border-2 border-[var(--green)] rounded-md text-[var(--green)] p-13">
            Resume
          </button>
        </li>
      </ul>

      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a href="">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a href="">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a href="">
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
