import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailCard = () => {
  const dataCard = useLoaderData();
  const { description, img, name, title, id, location } = dataCard;
  console.log(dataCard);

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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
