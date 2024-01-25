import React from "react";
import styles from "../Sidebar/sidebar.module.css";
import Modal from "../Sidebar/Modal/Modal";
import Logo from "../Sidebar/Logo/Logo";
import NewBoardButton from "./NewBoardButton/NewBoardButton";
import Board from "../Sidebar/Board/Board";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelp from "./NeedHelp/NeedHelp";
import LogoutButton from "../Sidebar/LogoutButton/LogoutButton";

//! Line 89-> We replace with our modalBoard model

export const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebarcontainer}>
        <Modal />
        <Logo />
        <NewBoardButton />
        <Board />
        <BoardsList />
        <div>
          <NeedHelp />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};
//*Logo component*
// export const Logo = () => {
//   return (
//     <div>
//       <svg width="24" height="24" fill="#FFFFFF">
//         <use href="../../assets/svg/symbol-defs.svg#icon-logo-lightning" />
//       </svg>
//     </div>
//   );
// };

// //* Modal component*
// export const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) {
//     return null;
//   }
//   return (
//     <div>
//       <button onClick={onClose}>Close</button>
//       {children}
//     </div>
//   );
// };

// //*NewBoard component with button*
// export const NewBoardButton = ({ onNewBoard }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const [name, setName] = useState("");

//   const handleNewBoard = (name) => {
//     onNewBoard(name);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <p>Create a new board</p>
//       <button onClick={() => setIsOpen(true)}>
//         <svg width="20" height="20" fill="#121212">
//           <use href="../../assets/svg/symbol-defs.svg#icon-plus" />
//         </svg>
//       </button>
//       <Modal isOpen={isOpen} onClose={handleNewBoard}>
//         {/*We Replace with our modalBoard model here
// 				<input type="text" value={name} onChange={e => setName(e.target.value)} /> */}
//         <button onClick={() => handleNewBoard("New Board")}>Create</button>
//       </Modal>
//     </>
//   );
// };

// //*Board component*
// export const Board = ({ name, svg, onEdit, onDelete }) => {
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [newName, setNewName] = useState(name);
//   const [newSvg, setNewSvg] = useState(svg);

//   const handleNameChange = (event) => {
//     setNewName(event.target.value);
//   };

//   const handleSvgChange = (event) => {
//     setNewSvg(event.target.value);
//   };
//   const handleClose = () => {
//     onEdit(newName, newSvg);
//     setIsEditOpen(false);
//   };

//   return (
//     <div>
//       <svg style={{ width: "18", height: "18", fill: "var(--white-color)" }}>
//         <use href={svg} />
//       </svg>
//       <div>{name}</div>
//       <button onClick={() => setIsEditOpen(true)}>
//         <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
//           <use href="../../assets/svg/symbol-defs.svg#icon-pencil" />
//         </svg>
//       </button>
//       <button onClick={onDelete}>
//         <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
//           <use href="../../assets/svg/symbol-defs.svg#icon-trash-04" />
//         </svg>
//       </button>

//       <Modal isOpen={isEditOpen} onClose={handleClose}>
//         <input type="text" value={newName} onChange={handleNameChange} />
//         <input type="text" value={newSvg} onChange={handleSvgChange} />
//       </Modal>
//     </div>
//   );
// };

//*BoardsList component*
// export const BoardsList = () => {
//   const [boards, setBoards] = useState([]);

//   const handleNewBoard = (name) => {
//     setBoards([...boards, { name, svg: "" }]);
//   };

//   const handleEditBoard = (index, newName, newSvg) => {
//     const newBoards = [...boards];
//     newBoards[index] = { name: newName, svg: newSvg };
//     setBoards(newBoards);
//   };

//   const handleDeleteBoard = (index) => {
//     const newBoards = [...boards];
//     newBoards.splice(index, 1);
//     setBoards(newBoards);
//   };

//   return (
//     <div>
//       {boards.map((board, index) => (
//         <Board
//           key={index}
//           name={board.name}
//           svg={board.svg}
//           onEdit={(newName, newSvg) => handleEditBoard(index, newName, newSvg)}
//           onDelete={() => handleDeleteBoard(index)}
//         />
//       ))}
//       <NewBoardButton onNewBoard={handleNewBoard} />
//     </div>
//   );
// };

// *NeedHelp component*
// export const NeedHelp = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <img src={plantImg} alt="HelpPlant" />
//       <p>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</p>
//       <button onClick={handleOpen}>
//         <svg width="20" height="20" fill="#FFFFFF">
//           <use href="../../assets/svg/symbol-defs.svg#icon-question" />
//         </svg>
//         Need help?
//       </button>
//       <Modal isOpen={isOpen} onClose={handleClose}>
//         {/* Replace here with our HelpModal */}
//         {/* <form>
//           <input type="text" placeholder="Your question" />
//           <button type="submit">Submit</button>
//         </form> */}
//       </Modal>
//     </div>
//   );
// };

// //*ButtonLogout component*
//   export const LogoutButton = () => {
//   const handleLogout = () => {
//     // ! Add here our logout logic from backend
//   };

//   return (
//     <button onClick={handleLogout}>
//       <svg width="20" height="20" fill="#BEDBB0">
//         <use href="../../assets/svg/symbol-defs.svg#icon-arrow-circle-broken-right" />
//       </svg>
//       Log out
//     </button>
//   );
// };
