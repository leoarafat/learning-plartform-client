import React, { useContext, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Context/UserContext";

const CheckOut = () => {
  const data = useLoaderData();
  const { name, title } = data;
  console.log(data);

  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const navigate = useNavigate()
  const handleCheckout = () =>{
navigate('/userProfile')
swal("Submitted!", "You can visit now!", "success");
  }

  return (
    <div>
      <div className="flex items-center justify-center text-center bg-gray-900 text-gray-100">
        <form
          onClick={handleSubmit}
          
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100 ng-untouched ng-pristine ng-valid"
        >
          <p className="bg-indigo-500 mb-1">{name}</p>
          <p className="bg-indigo-500">{title}</p>
          <label for="email" className="self-start text-xs font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            readOnly
            defaultValue={user?.email}
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
          />
          <label for="name" className="self-start text-xs font-semibold">
            Name
          </label>
          <input
            id="name"
            onChange={handleNameChange}
            defaultValue={userName}
            name="name"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
          />
          <label
            for="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Photo
          </label>
          <input
            id="photoURL"
            name="photoURL"
            ref={photoURLRef}
            defaultValue={user?.photoURL}
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
          />

          <button
          onClick={handleCheckout}
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 text-gray-900"
          >
            submit
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs"></div>
        </form>
      </div>
    </div>
  );
};
export default CheckOut;
