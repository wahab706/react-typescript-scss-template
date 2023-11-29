import { Routes as AppRoutes, Route, Navigate } from "react-router-dom";
import { Help } from "./pages";

function Routes(): JSX.Element {
  return (
    <>
      <AppRoutes>
        <Route path="/" element={<Help />} />
        <Route path="*" element={<Navigate to="/" />} />
      </AppRoutes>
    </>
  );
}

export default Routes;
