import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
//import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { SharedLayoutStart } from "./components/SharedLayoutStart/SharedLayoutStart";
import { Home } from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StartPage = lazy(() => import("./pages/Start/Start"));
const AuthPage = lazy(() => import("./pages/Auth/Auth"));
const RegistrationForm = lazy(() =>
  import("./components/RegisterForm/RegistrationForm")
);
const LoginForm = lazy(() => import("./components/LoginForm/LoginForm"));
const ScreensPage = lazy(() => import("./pages/ScreensPage/ScreensPage"));
const BlankPage = lazy(() => import("./pages/BlankPage/BlankPage"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayoutStart />}>
          <Route index element={<StartPage />} />
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          >
            <Route path="register" element={<RegistrationForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
        </Route>

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route path=":boardId" element={<ScreensPage />} />
          <Route index element={<BlankPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
