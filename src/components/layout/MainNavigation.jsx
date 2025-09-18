import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const MainMavigation = () => {
  return (
    <header className="flex justify-between py-7 text-xl font-medium bg-pink-950 text-white px-8 md:px-36">
      <div className="text-3xl md:text-4xl flex items-center text-bold">
        React Meetups
      </div>
      <nav>
        <ul className="md:flex gap-8 items-center text-3xl hidden text-pink-200 font-normal">
          <li className="hover:text-white">
            <Link to="/">All Meetups</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li className="hover:text-white hover:opacity-100">
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center text-4xl text-bold md:hidden">
        <a href="#">
          <GiHamburgerMenu />
        </a>
      </div>
    </header>
  );
};

export default MainMavigation;
