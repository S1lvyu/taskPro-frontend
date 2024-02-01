import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Message } from "../../components/Message/Message";
import { getBoardsData } from "../../redux/selectors";
import {
  getUserError,
  getBoardError,
  getIsLoadingUser,
  getBoardIsLoading,
} from "../../redux/selectors";
const ScreensPage = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const userError = useSelector(getUserError);
  const boardError = useSelector(getBoardError);
  const isLoadingUser = useSelector(getIsLoadingUser);
  const isLoadingBoard = useSelector(getBoardIsLoading);

  const navigate = useNavigate();
  const { boardId } = useParams();
  const boards = useSelector(getBoardsData);
  const board = boards.find((item) => item._id === boardId);

  useEffect(() => {
    if (!board) {
      navigate("/home");
    }
  }, [board, navigate]);
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
      {board && <Dashboard board={board}></Dashboard>}
      {isMessageOpen && !isLoadingUser && !isLoadingBoard && (
        <Message
          closeMessage={closeMessage}
          textMessage={userError || boardError}
        />
      )}
    </>
  );
};

export default ScreensPage;
