import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { Background } from '../../components/...';
// import { HeaderDashboard } from '../../components/...';
// import { MainDashboard } from "../../components/...";
import { getBoardsData } from "../../redux/selectors";

const ScreensPage = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const boards = useSelector(getBoardsData);
  const board = boards.find(item => item.id === boardId);


  useEffect(() => {
    if (!board) {
      navigate('/home');
    }
  });

  return (
    <>
    <h1>Dashoard goes here: TO DO</h1>
      {/* {board && (
        <Background>
          <HeaderDashboard />
          <MainDashboard />
        </Background>
      )} */}
    </>
  );
};

export default ScreensPage;
