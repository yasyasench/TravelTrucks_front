import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/camperSelectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  console.log("Campers Data:", campers); 

  if (!campers || campers.length === 0) {
    return <p>No campers available.</p>;
  }

  return (
    <div>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.item}> 
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
