import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import Courses from "../../component/Courses/Courses";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Faq from "../../component/Faq/Faq";
import LoginPage from "../../component/LoginPage/LoginPage";
import RegisterPage from "../../component/RegisterPage/RegisterPage";
import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/", element: <Courses />
      },
      {
        path: "/courses", element: <Courses />},
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ]
  }
]);
