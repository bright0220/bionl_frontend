import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import {
  HomePage,
  LoginPage,
  ProjectPage,
  ResetPasswordPage,
  SignUpPage,
} from "../pages";

export const AppRoutes = () => {
  const { authState } = useAuth();

  return (
    <>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignUpPage />} path="/register" />
          <Route element={<ResetPasswordPage />} path="/reset" />
          <Route
            element={
              <ProtectedRoute
                isAllowed={!!authState.user}
                redirectTo="/login"
              />
            }
          >
            <Route element={<HomePage />} path="/" />
            <Route element={<ProjectPage />} path="/projects/:id" />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export type ProtectedRouteProps = React.PropsWithChildren<{
  isAllowed: boolean;
  redirectTo?: string;
}>;

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
  return !isAllowed ? (
    <Navigate replace to={redirectTo} />
  ) : children ? (
    <>{children}</>
  ) : (
    <Outlet />
  );
};
