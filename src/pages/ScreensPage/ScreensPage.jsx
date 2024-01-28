import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddColumn from "../../components/AddColumn/AddColumn";

import { getBoardsData, selectModal } from "../../redux/selectors";

const ScreensPage = () => {
  const modal = useSelector(selectModal);
  const navigate = useNavigate();
  const { boardId } = useParams();
  const boards = useSelector(getBoardsData);
  const board = boards.find((item) => item._id === boardId);

  useEffect(() => {
    if (!board) {
      navigate("/home");
    }
  }, [board, navigate]);

  return (
    <>
      {board && (
        <Dashboard board={board}>
          {modal && <AddColumn title="Add Column" textButton="Add" />}
        </Dashboard>
      )}
    </>
  );
};

export default ScreensPage;
