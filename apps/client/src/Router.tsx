import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Error from "./pages/Error";
import Question from "./pages/Question";
import Home from "./pages/Home";
import Login from "@pages/Authentication/Login";
import Signup from "@pages/Authentication/Signup";
import Conclusion from "@pages/Conclusion";
import Admin from "@pages/Admin";

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
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/results",
          element: <Conclusion />,
        },
        {
          path: "/question/:id",
          element: <Question />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
