import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryName = ({named}) => {
    
  const navigate = useNavigate()
const handleNavigate = () =>{
  navigate(`/detailPage/${named.id}`)
}
    return (
        <div>
            <p onClick={handleNavigate}>
                <Link>{named.name}</Link>
            </p>
        </div>
    );
};

export default CategoryName;