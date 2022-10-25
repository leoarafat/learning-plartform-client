import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CardDetail = () => {
  const data = useLoaderData();
  const { id, name, img, title } = data;
//   console.log(data);

const navigate = useNavigate()
const handleDetails = () =>{
    navigate(`/details/${id}`)
}


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <img src={img} alt="" />
          <div className="card-actions justify-end">
            <button onClick={handleDetails} className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
