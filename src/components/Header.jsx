import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center items-center w-full h-20 drop-shadow-lg shadow-xl font-semibold text-lg rounded sticky top-0 left-0 z-10 bg-white">
      <div className="flex justify-between items-end lg:items-center mx-6 lg:mx-24 w-full">
        <NavLink>
          <div
            className="hover:text-orange-400 font-extrabold text-3xl font-caveat hover:cursor-pointer "
            onClick={goTop}
          >
            Gaurav Kumar
          </div>
        </NavLink>

        <div className="lg:hidden cursor-pointer">
          {showMenu ? (
            <FaTimes onClick={closeMenu} size={24} />
          ) : (
            <FaBars onClick={toggleMenu} size={24} />
          )}
        </div>

        <div
          className={`lg:flex items-center justify-center gap-1 lg:gap-12 list-none ${
            showMenu
              ? "fixed font-jost flex flex-col right-0 top-[85px] bg-gray-400 bg-opacity-50 w-[90%] left-4 rounded-lg border-slate-400 border-2"
              : "hidden"
          }`}
        >
          <ul className="lg:flex items-center justify-center gap-12 list-none hover:cursor-pointer">
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                exact
                activeClassName="active"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="Experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                Experience
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="Volunteering"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                Volunteering
              </Link>
            </li>

            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                My Projects
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="Achievements"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                Achievements
              </Link>
            </li>
            <li className="hover:text-orange-400 decoration-4">
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="active"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
