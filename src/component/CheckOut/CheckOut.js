import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkData = useLoaderData();
  // console.log(checkData)
  const { description, img, name, title, id, location } = checkData;

  const handleBackButton = () => {};
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1>{name}</h1>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to="/courses">
              {" "}
              <button onClick={handleBackButton} className="btn btn-primary">
                Go back courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
