import { Link } from "react-router-dom";
import css from "./Buttons.module.css";

const LinkBtn = ({ link, children }) => {
  return (
    <Link className={css.button} to={link}>
      {children}
    </Link>
  );
};

export default LinkBtn;
