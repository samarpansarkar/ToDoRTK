import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import AddToDo from "../pages/AddTodoPge";
import UpdateTodoPage from "../pages/UpdateTodoPage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <App />
      },
      {
        path: "/add", element: <AddToDo />
      },
      {
        path: "/update/:id", element: <UpdateTodoPage />
      }
    ]
  },
]);

export default Router;
