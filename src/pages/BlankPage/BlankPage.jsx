import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBoardsData } from "../../redux/selectors";
import css from "./BlankPage.module.css";

const BlankPage = () => {
  const boards = useSelector(getBoardsData);
  const navigate = useNavigate();
  // const handleAddBoard = () => {};

  useEffect(() => {
    if (boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
    }
  }, [boards, navigate]);
  return (
    <section className={css.section}>
      <div className={css.text__wrapp}>
        <p>
          Before starting your project, it is essential
          {
            <button
              // onClick={() => handleAddBoard()}
              className={css.button}
            >
              {" "}
              to create a board{" "}
            </button>
          }
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default BlankPage;
