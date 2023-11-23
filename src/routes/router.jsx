import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import NotFound from "../components/shared/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        loader: () => fetch("/services.json"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/service/:id",
        loader: () => fetch("/services.json"),
        element: <ServiceDetail/>
      }
    ],
  },
]);

export default router;
