import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SerchedUserPage from "../Components/SerchedUserPage/SerchedUserPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Check from "../Hooks/Check";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:id",
        element: <Check><SerchedUserPage /></Check>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:4003/ca/${params.id}`
          ),
      },
    ],
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
]);

export default router;
