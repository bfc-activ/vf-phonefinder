import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Error from "./pages/Error";
import Question from "./pages/Question";
import Home from "./pages/Home";
import Login from "@pages/Authentication/Login";
import Signup from "@pages/Authentication/Signup";

const Router = () => {
  // Create a new React Router with the below routes.
  const router = createBrowserRouter([
    {
      element: <AppShell />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Signup />,
        },
        {
          path: "/question/1",
          element: <Question />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
