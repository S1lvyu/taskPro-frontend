import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
