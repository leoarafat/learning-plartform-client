import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  console.log(data);
  const { id, title, description, prime_img, location, price } = data;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={prime_img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Course Cost: {price}</p>
          <div className="card-actions justify-end">
            <Link to="/courses">
              {" "}
              <button className="btn btn-primary">Go Back course</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
