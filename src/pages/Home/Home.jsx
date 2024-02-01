import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { getBoards } from "../../redux/operations";
import {
  getBoardsData,
  selectModal,
  getModalType,
} from "../../redux/selectors";
import { getUserToken } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import NewBoard from "../../components/NewBoard/NewBoard";
import {
  getUserError,
  getBoardError,
  getIsLoadingUser,
  getBoardIsLoading,
} from "../../redux/selectors";
import { Message } from "../../components/Message/Message";
export const Home = () => {
  const modal = useSelector(selectModal);
  const modalType = useSelector(getModalType);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boards = useSelector(getBoardsData);
  const token = useSelector(getUserToken);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const userError = useSelector(getUserError);
  const boardError = useSelector(getBoardError);
  const isLoadingUser = useSelector(getIsLoadingUser);
  const isLoadingBoard = useSelector(getBoardIsLoading);
  useEffect(() => {
    dispatch(getBoards(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (!hasRedirected && boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
      setHasRedirected(true);
    }
  }, [boards, hasRedirected, navigate]);
  useEffect(() => {
    if (userError || boardError) {
      setIsMessageOpen(true);
    }
  }, [userError, boardError]);
  const closeMessage = () => {
    setIsMessageOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100%",
          }}
        >
          <Header />
          <Suspense fallback={<Loader />}>
            <Outlet />
            {modal && modalType === "board" && (
              <NewBoard componentTitle="Add Board" textButton="Add" />
            )}
            {isMessageOpen && !isLoadingUser && !isLoadingBoard && (
              <Message
                closeMessage={closeMessage}
                textMessage={userError || boardError}
              />
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
};
