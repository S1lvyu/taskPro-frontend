import { Loader } from '../Loader/Loader';
import { StartContainer } from '../StartContainer/StartContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayoutStart = () => {
  return (
    <StartContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StartContainer>
  );
};