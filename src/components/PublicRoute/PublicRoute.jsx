import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuthenticated } from "../../redux/selectors";

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuthenticated);

  return (
  isAuth ? <Navigate to="/home" /> : children
  )
};
