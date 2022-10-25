import { Container } from "postcss";
import React from "react";
import { Outlet } from "react-router-dom";
import CardDetail from "../../component/Card.detail/CardDetail";
import CourseCard from "../../component/CourseCard/CourseCard";
import Courses from "../../component/Courses/Courses";

import Navbar from "../../component/Navbar/Navbar";
import Right from "../../component/Right/Right";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  );
};

export default Main;
