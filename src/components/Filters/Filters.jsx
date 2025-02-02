import { useEffect } from "react";
import css from "./Filters.module.css";
import toast from "react-hot-toast";
import SubmitBtn from "../Buttons/SubmitBtn";
import LocationFilter from "../LocationFilter/LocationFilter";
import FilterType from "../FiltersBtn/FilterType";
import FilterEquipment from "../FiltersBtn/FilterEquipment";

import {
  selectLocation,
  selectVehicleEquipment,
  selectVehicleType,
} from "../../redux/filters/filtersSelectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/camperOperations";
import { selectError, selectPage } from "../../redux/campers/camperSelectors";
import { setPage } from "../../redux/campers/camperSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const type = useSelector(selectVehicleType);
  const currentPage = useSelector(selectPage);
  const vehicleEquipment = useSelector(selectVehicleEquipment);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (isError) {
      toast.error("We didn’t find anything. Please try again.", {
        position: "top-right",
      });
    }
  }, [isError]); 

  const handleSearch = () => {
    dispatch(setPage(1));
    const filteredEquipment = Object.fromEntries(
      Object.entries(vehicleEquipment)
        .filter(([_, value]) => value === true)
        .filter(([key]) => key !== "Automatic")
    );
    const transmissionType = vehicleEquipment.Automatic ? "automatic" : "";
    const searchParams = {
      equipment: filteredEquipment,
      transmission: transmissionType,
      form: type,
      location,
      page: currentPage,
    };
    dispatch(fetchCampers(searchParams));
  };

  return (
    <aside className={css.filters}>
      <LocationFilter />
      <p className={css.text}>Filters</p>
      <FilterEquipment />
      <FilterType />
      <SubmitBtn onSearch={handleSearch}>Search</SubmitBtn>
    </aside>
  );
};

export default Filters;
