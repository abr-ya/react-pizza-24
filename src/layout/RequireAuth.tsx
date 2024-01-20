import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useAppSelector((state) => state.user.jwt);
  console.log("Auth jwt = ", jwt);

  if (!jwt) return <Navigate to="/auth/login" replace />;

  return children;
};
