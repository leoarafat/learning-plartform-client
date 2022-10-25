import { data } from "autoprefixer";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const DetailCard = () => {
  const dataCard = useLoaderData();
  const { description, img, name, title, id, location } = dataCard;
//   console.log(dataCard);

  const navigate = useNavigate()
  const handlePremiumButton = () =>{
navigate(`/checkOut/${id}`)
  }

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <button className="btn btn-outline btn-info my-2">Download CV</button>
        <figure>
            
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h1 className="text-2xl">{name}</h1>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handlePremiumButton} className="btn btn-primary">Get Premium Access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
