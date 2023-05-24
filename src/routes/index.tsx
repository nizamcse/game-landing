import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";

const Router = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { path: "", element: <Home /> },
            { path: "/:category", element: <Category /> },
          ],
        },
      ])}
    </>
  );
};
export default Router;
