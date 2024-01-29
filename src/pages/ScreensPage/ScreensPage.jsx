import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";

import { getBoardsData } from "../../redux/selectors";

const ScreensPage = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const boards = useSelector(getBoardsData);
  const board = boards.find((item) => item._id === boardId);

  useEffect(() => {
    if (!board) {
      navigate("/home");
    }
  }, [board, navigate]);

  return <>{board && <Dashboard board={board}></Dashboard>}</>;
};

export default ScreensPage;
