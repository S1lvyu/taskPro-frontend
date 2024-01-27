import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBoardsData } from "../../redux/selectors";
import { getBoards } from "../../redux/operations";
import css from "./BlankPage.module.css";

import { Loader } from "../../components/Loader/Loader";
import Modal from "../../components/ModalWindow/ModalWindow";
import CreateNewBoard from '../../components/NewBoard/NewBoard';
import { useIsBoardsLoading } from "../../hooks/useIsBoardsLoading";
import { useDispatch } from "react-redux";

const BlankPage = () => {
	const boards = useSelector(getBoardsData);
	const navigate = useNavigate();
	// const handleAddBoard = () => {};

	const dispatch = useDispatch();
	const [isModalOpen, setModalOpen] = useState(false);
	const isLoading = useIsBoardsLoading();
	const openModal = () => {setModalOpen(true)};

	// useEffect(() => {
	// 	dispatchEvent(getBoards());
	// },[dispatch]);

	const closeModal = () => {
		setModalOpen(false);
	}

	useEffect(() => {
		if (boards.length > 0) {
			navigate(`/home/${boards[0]._id}`);
		}
	}, [boards, navigate]);
	return (
		<>
      {isLoading && <Loader />}
      {!isLoading && boards.length === 0 ? (
				<>
					<section className={css.section}>
						<div className={css.text__wrapp}>
							<p>
								Before starting your project, it is essential
								{
									<button 
									onClick={() => openModal()}
									className={css.button}> to create a board </button>
								}
								to visualize and track all the necessary tasks and milestones. This
								board serves as a powerful tool to organize the workflow and ensure
								effective collaboration among team members.
							</p>
						</div>
					</section>

					{isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
        </>

			):(
				<>
				<section className={css.section}>
						<div className={css.text__wrapp}>
							<p>
								Before starting your project, it is essential
								{
									<button 
									onClick={() => openModal()}
									className={css.button}> to create a board </button>
								}
								to visualize and track all the necessary tasks and milestones. This
								board serves as a powerful tool to organize the workflow and ensure
								effective collaboration among team members.
							</p>
						</div>
					</section>

					{isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CreateNewBoard onClose={closeModal} />
            </Modal>
          )}
					</>
				)}
				;
			</>
		);
	}

export default BlankPage;
