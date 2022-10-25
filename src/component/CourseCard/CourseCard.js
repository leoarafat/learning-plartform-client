import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = ({ card }) => {
  // console.log(card)

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/cardDetail/${card.id}`);
  };

  return (
    <div onClick={handleNavigate}>
     
      <ul>
        <li className="text-3xl">
          <Link>{card.name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default CourseCard;
