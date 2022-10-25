import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id, title, description, img, location, price } = data;
  // console.log(data);
const navigate = useNavigate()
const handlePremium = () =>{
  navigate(`/checkout/${id}`)
}

  return (
    <div>
   
      <div className="card w-[50%] bg-base-100 shadow-xl mx-auto">
     <button className="btn btn-outline btn-info">DOwnload Data</button>
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <h3>Location: {location}</h3>
          
          <div className="card-actions">
            <button onClick={handlePremium} className="btn btn-primary">Get Premium Access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
