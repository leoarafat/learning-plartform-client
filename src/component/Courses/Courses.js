import React from "react";
import { useLoaderData } from "react-router-dom";
import CardDetail from "../Card.detail/CardDetail";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const data = useLoaderData();
  // console.log(data)

  return (
    <div className="grid grid-cols-2 m-[50px]">
      <div>
        {data.map((cards) => (
          <CourseCard card={cards} />
        ))}
      </div>
      <div >
        <CardDetail/>
      </div>
    </div>
  );
};

export default Courses;
