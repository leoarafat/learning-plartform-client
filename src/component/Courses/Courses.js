import React, { useEffect, useState } from "react";

import Category from "../Category/Category";
import CategoryName from "../CategoryName/CategoryName";
import './Courses.css'
const Courses = () => {
  const [userData, setData] = useState([]);
  console.log(userData);

  useEffect(() => {
    fetch("https://assignment-10-server-chi.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="main">
      <div className=" text-center  name-container">
        <h2 className="text-3xl text-purple-600 font-bold">Available Course</h2>
        {userData.map((named) => (
          <CategoryName key={named.id} named={named} />
        ))}
      </div>
      <div className=" detail-container">
        {userData.map((categoryDetail) => (
          <Category key={categoryDetail.id} categoryDetail={categoryDetail} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
