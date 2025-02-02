import { useDispatch, useSelector } from "react-redux";
import css from "./FiltersBtn.module.css";
import { setVehicleType } from "../../redux/filters/filtersSlice";
import { selectVehicleType } from "../../redux/filters/filtersSelectors";

const vehicleTypes = [
  { searchName: "panelTruck", name: "Van", icon: "./sprite.svg#icon-bi_grid-1x2" },
  {
    searchName: "fullyIntegrated",
    name: "Fully Integrated",
    icon: "./sprite.svg#icon-bi_grid",
  },
  { searchName: "alcove", name: "Alcove", icon: "./sprite.svg#icon-bi_grid-3x3-gap" },
];

const FilterType = () => {
  const dispatch = useDispatch();
  const selectedVehicleType = useSelector(selectVehicleType);

  const handleVehicleTypeClick = (type) => {
    dispatch(setVehicleType(selectedVehicleType === type ? null : type));
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle type</h4>
      <div className={css.box}>
        {vehicleTypes.map((type) => (
          <button
            className={css.btn}
            key={type.name}
            onClick={() => handleVehicleTypeClick(type.searchName)}
            style={{
              borderColor:
                selectedVehicleType === type.searchName ? "#d84343" : "#dadde1",
            }}
          >
            <svg className={css.icon} width={32} height={32}>
              <use href={type.icon}></use>
            </svg>
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterType;
