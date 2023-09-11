import { Route, Routes } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { user } = UserAuth();
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {user &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
    </Routes>
  );
};

export default AppRouter;
