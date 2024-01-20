import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AuthSection = () => {

  return (
    <div>
      <div>
        <NavLink
          to="register"
        >
          Registration
        </NavLink>
        <NavLink
          to="login"
        >
          Log In
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
