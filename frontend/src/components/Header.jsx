import { NavLink, Link } from "react-router-dom";
import {
  FaBook,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="container flex justify-between items-center py-[2em] border-[1px] border-[black]">
      <div className="logo flex border-[1px] border-[black]">
        <Link to="/" className="flex items-center">
          <FaBook className="mr-[0.5em]" /> MernTask
        </Link>
      </div>
      <nav className=" w-[50%] sm:w-[40%] md:w-[40%] lg:w-[30%]">
        <ul className="flex justify-between">
          {!user ? (<>
          <li>
            <NavLink
              to="/register"
              activeClassName="active"
              className="flex items-center"
            >
              <FaUser className="mr-[0.5em]" /> Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeClassName="active"
              className="flex items-center"
            >
              <FaSignInAlt className="mr-[0.5em]" /> Login
            </NavLink>
          </li>
          </>
          ): (<>
          <li>
            <NavLink
              to="/signout"
              activeClassName="active"
              className="flex items-center"
            >
              <FaSignOutAlt className="mr-[0.5em]" /> Logout
            </NavLink>
          </li>
          
          <li className="border-[1px] border-[black]">
            <NavLink
              to="/create"
              activeClassName="active"
              className="flex items-center"
            >
              <FaPen className="mr-[0.5em]" /> Create task
            </NavLink>
          </li> </>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
