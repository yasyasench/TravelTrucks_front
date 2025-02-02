import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Limit, fetchCampers } from "../../redux/campers/camperOperations";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotal,
} from "../../redux/campers/camperSelectors";

import Layout from "../../components/Layout/Layout";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { setPage } from "../../redux/campers/camperSlice";
import {
  selectLocation,
  selectVehicleType,
} from "../../redux/filters/filtersSelectors";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const totalItems = useSelector(selectTotal);
  const location = useSelector(selectLocation);
  const type = useSelector(selectVehicleType);

  const totalPages = Math.ceil(totalItems / Limit);

  useEffect(() => {
    const searchParams = { page: currentPage };
    dispatch(fetchCampers(searchParams));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
    const searchParams = { form: type, location, page: currentPage };
    dispatch(fetchCampers(searchParams));
  };

  return (
    <Layout>
      <div className={css.wrap}>
        <Filters />
        <div className={css.listContainer}>
          {campers && campers.length > 0 && <CampersList />}
          {isLoading && (
            <div className={css.logicWrap}>
              <Loader />
            </div>
          )}
          {isError && (
            <div className={css.logicWrap}>
              <ErrorMsg />
            </div>
          )}
          {currentPage < totalPages && (
            <button onClick={handleLoadMore} className={css.btn} type="button">
              Load more
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
