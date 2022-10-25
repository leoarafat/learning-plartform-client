import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/Blog/Blog";
import CheckOut from "../../component/CheckOut/CheckOut";

import Courses from "../../component/Courses/Courses";
import DetailCard from "../../component/DetailCard/DetailCard";

import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Faq from "../../component/Faq/Faq";
import Home from "../../component/Home/Home";

import LoginPage from "../../component/LoginPage/LoginPage";
import PrivateRoutes from "../../component/PrivateRoutes/PrivateRoutes";

import RegisterPage from "../../component/RegisterPage/RegisterPage";

import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => {
          fetch("http://localhost:5000/course-category");
        },
        element: <Courses />,
      },
      {
        path: "/detailPage/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseData/${params.id}`),
        element: <DetailCard />,
      },
      {
        path: "/checkOut/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseData/${params.id}`),
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",

        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);
