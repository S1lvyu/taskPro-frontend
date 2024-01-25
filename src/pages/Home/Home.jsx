import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
// import { Sidebar } from "../../components/...";
// import { Header } from "../../components/...";
import { getBoards } from "../../redux/operations";
import { getBoardsData } from "../../redux/selectors";

export const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const boards = useSelector(getBoardsData);
	const [hasRedirected, setHasRedirected] = useState(false);

	useEffect(() => {
		dispatch(getBoards());
	}, [dispatch]);

	useEffect(() => {
		if (!hasRedirected && boards.length > 0) {
			navigate(`/home/${boards[0]._id}`);
			setHasRedirected(true);
		}
	}, [boards, hasRedirected, navigate]);

	return (
		<>
			{/* <Header />
			<Sidebar /> */}
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};
