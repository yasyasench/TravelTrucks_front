import css from "./Buttons.module.css";

const SubmitBtn = ({ children, onSearch }) => {
  return (
    <button onClick={onSearch} className={css.button} type="submit">
      {children}
    </button>
  );
};

export default SubmitBtn;
