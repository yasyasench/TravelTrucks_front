import { Link } from "react-router-dom";
import LinkBtn from "../Buttons/LinkBtn";
import css from "./CamperItem.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";

const CamperItem = ({ camper }) => {
 if (!camper) return null; // Ensure camper is defined before rendering

  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery = [],
    reviews = [],
  } = camper;

  const countReviews = reviews.length || 0;
  const img = gallery.length > 0 ? gallery[0].thumb : "fallback-image-url.jpg";
  const formattedPrice = price ? `${price},00` : "N/A";
  const formattedDescr = description ? description.slice(0, 60) : "No description available";

  return (
    <div className={css.box}>
      <img className={css.img} src={img} alt={name} />

      <div className={css.textWrap}>
        <div className={css.head}>
          <div className={css.titleWrap}>
            <h3 className={css.title}>{name}</h3>
            <p className={css.price}>
              <span>&#8364;</span>
              {formattedPrice}
            </p>
            <button className={css.heartBtn} type="button">
              <svg width={26} height={24}>
                <use href="/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>

          <div className={css.ratingWrap}>
            <Link to={`/catalog/${id}/reviews`} className={css.rating}>
              <svg className={css.icon} width={16} height={16}>
                <use href="/sprite.svg#icon-star-yellow"></use>
              </svg>
              {rating}
              <span>({countReviews} reviews)</span>
            </Link>
            <p>
              <svg className={css.icon} width={16} height={16}>
                <use href="/sprite-2.svg#icon-map"></use>
              </svg>
              {location}
            </p>
          </div>
        </div>

        <p>{formattedDescr}...</p>
        <CategoriesList camper={camper} />
        <LinkBtn link={`/catalog/${id}`}>Show more</LinkBtn>
      </div>
    </div>
  );
};

export default CamperItem;
