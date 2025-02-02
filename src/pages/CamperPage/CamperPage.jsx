import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import css from "./CamperPage.module.css";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import BookForm from "../../components/BookForm/BookForm";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import { fetchById } from "../../redux/campers/camperOperations";

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const CamperPage = () => {
  const camper = useSelector(selectCamperWithId);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  return (
    <Layout>
      {camper !== null && <CamperInfo />}
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews" > 
            Reviews
          </NavLink>
        </li>
      </ul>

      <div className={css.wrap}>
        <Suspense fallback={<Loader />}>
          {camper !== null && <Outlet />}
        </Suspense>
        <BookForm />
      </div>
    </Layout>
  );
};

export default CamperPage;
