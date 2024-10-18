import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import Logo from "../../styles/assets/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className="  my-auto mx-auto grid grid-cols-[1fr,0.1fr] text-sm ">
        <Link to="/" className="text-black text-lg font-bold">
          <div className='lg:text-[28px]  place-items-center lg:w-full text-md w-[90%] text-wrap place-self-start grid grid-cols-[0.1fr,1fr] auto-cols-min  gap-2'>
            <div className="grid mt-1"><Logo w="25" h="25"/></div>
            <div className=" place-self-start text-primary">Speakup</div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="lg:flex lg:my-auto  space-x-2 text-[12px] hidden lg:text-[20px] lg:gap-8">   
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="relative">

        <button
          className={styles.buttonStyle + " lg:hidden z-40"}
          onClick={toggleDropdown}
        >
          {isOpen ? "X" : "|||"}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute right-0 top-8 bg-white shadow-lg p-4 rounded-lg lg:hidden -z-10">
            <li>
              <Link to="/" className="block px-4 py-2">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2">About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="block px-4 py-2">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2">Contact</Link>
            </li>
          </ul>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
