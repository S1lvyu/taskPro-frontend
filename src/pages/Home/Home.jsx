import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { getBoards } from "../../redux/operations";
import { getBoardsData } from "../../redux/selectors";
import { getUserToken } from "../../redux/selectors";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boards = useSelector(getBoardsData);
  const token = useSelector(getUserToken);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    dispatch(getBoards(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (!hasRedirected && boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
      setHasRedirected(true);
    }
  }, [boards, hasRedirected, navigate]);

  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
