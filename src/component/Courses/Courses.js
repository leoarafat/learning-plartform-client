import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Courses = () => {
  const [userData, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/course-category')
    .then(res => res.json())
    .then(data => setData(data)
    )
  },[])

  return (
    <div className="lg:grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 m-[50px]">
      <div>
        {userData.map((categoryName) => (
          <p>
            <Link>{categoryName.name}</Link>
          </p>
        ))}
      </div>
      <div className="lg:grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
        {userData.map(categoryDetail => <Category categoryDetail={categoryDetail}/>)}
      </div>
    </div>
  );
};

export default Courses;
