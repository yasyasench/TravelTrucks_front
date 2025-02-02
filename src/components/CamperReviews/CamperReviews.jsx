import { useDispatch, useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import css from "./CamperReviews.module.css";
import RatingStars from "../RatingStars/RatingStars";
import { useEffect } from "react";
import { fetchById } from "../../redux/campers/camperOperations";
import { useParams } from "react-router-dom";

const CamperReviews = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCamperWithId);
  const { reviews } = camper;

  return (
    <ul className={css.list}>
      {camper !== null &&
        reviews.map((review, index) => (
          <li className={css.item} key={index}>
            <div className={css.nameContainer}>
              <span className={css.circle}>
                {review.reviewer_name.slice(0, 1)}
              </span>
              <div className={css.nameWrap}>
                <p className={css.name}>{review.reviewer_name}</p>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
    </ul>
  );
};

export default CamperReviews;
