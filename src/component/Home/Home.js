import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import Coding from "../../Animation/Coding.json";
import CategoryName from "../CategoryName/CategoryName";
import Category from "../Category/Category";

const Home = () => {
  const [userData, setData] = useState([]);
  console.log(userData);

  useEffect(() => {
    fetch("https://assignment-10-server-chi.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Happy Coding</h1>
            <p className="py-6">
              This is a quality learning platform web application. Learners can
              get their needed courses on this platform. Anyone can sign up for
              their profile and they, can visit the course outline.After login
              into this application, they can buy their needed course easily.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Lottie
                className="lg:w-[350px] h-[350px]"
                animationData={Coding}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center  name-container">
          <h2 className="text-3xl text-purple-600 font-bold">
            Available Course
          </h2>
          {userData.map((named) => (
            <CategoryName key={named.id} named={named} />
          ))}
        </div>
        <div>
        <div className=" detail-container">
        {userData.map((categoryDetail) => (
          <Category key={categoryDetail.id} categoryDetail={categoryDetail} />

        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
