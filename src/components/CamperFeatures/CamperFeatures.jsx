import { useDispatch, useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import css from "./CamperFeatures.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchById } from "../../redux/campers/camperOperations";

const CamperFeatures = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCamperWithId);

  if (!camper) {
    return <p className={css.loading}>Loading camper details...</p>;
  }

  const { form, length, width, height, tank, consumption } = camper;

  return (
    <div className={css.wrap}>
      {camper && <CategoriesList camper={camper} />}
      <div>
        <h4 className={css.title}>Vehicle details</h4>
        <ul className={css.params}>
          <li className={css.item}>
            <p>Form</p> <span>{form}</span>
          </li>
          <li className={css.item}>
            <p>Length</p> <span>{length}</span>
          </li>
          <li className={css.item}>
            <p>Width</p> <span>{width}</span>
          </li>
          <li className={css.item}>
            <p>Height</p> <span>{height}</span>
          </li>
          <li className={css.item}>
            <p>Tank</p> <span>{tank}</span>
          </li>
          <li className={css.item}>
            <p>Consumption</p> <span>{consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
