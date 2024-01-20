//import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//import { getIsAuthenticated } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  //const isAuth = useSelector(getIsAuthenticated);

  return (
  //isAuth ? children : 
  <Navigate to="/auth/login" />
  )
};
