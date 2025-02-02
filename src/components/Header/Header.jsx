import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Header = () => {
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
        <span className={css.accent}>Travel</span>Trucks
      </Link>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
