import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { getBoards } from "../../redux/operations";
import { getBoardsData } from "../../redux/selectors";
import { getUserToken } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boards = useSelector(getBoardsData);
  const token = useSelector(getUserToken);
  const [hasRedirected, setHasRedirected] = useState(false);
  console.log(boards);
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
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Header />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};
