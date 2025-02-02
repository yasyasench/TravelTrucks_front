import LinkBtn from "../../components/Buttons/LinkBtn";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.main}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <LinkBtn link="/catalog">View Now</LinkBtn>
    </div>
  );
};

export default HomePage;
