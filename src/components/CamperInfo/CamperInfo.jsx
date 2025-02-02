import { useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import css from "./CamperInfo.module.css";
import { Link } from "react-router-dom";

const CamperInfo = () => {
  const camper = useSelector(selectCamperWithId);
  const { name, price, rating, location, gallery, description } = camper;
  const formattedPrice = `${price},00`;
  const countReviews = camper.reviews.length;

  return (
    <div>
      <h1 className={css.title}>{name}</h1>
      <div className={css.ratingWrap}>
        <Link to="/catalog/:id/reviews" className={css.rating}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#icon-star-yellow"></use>
          </svg>
          {rating}
          <span>({countReviews} reviews)</span>
        </Link>
        <p>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#icon-map"></use>
          </svg>
          {location}
        </p>
      </div>
      <p className={css.price}>
        <span>&#8364;</span>
        {formattedPrice}
      </p>
      <ul className={css.imgList}>
        {gallery.map((img, index) => (
          <li className={css.imgItem} key={index}>
            <img src={img.thumb} alt={name} />
          </li>
        ))}
      </ul>
      <p className={css.descr}>{description}</p>
    </div>
  );
};

export default CamperInfo;
