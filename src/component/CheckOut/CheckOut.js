

import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Context/UserContext';


const CheckOut = () => {

  // const handleCheckOut = (e) =>{
  //   e.preventDefault()
  // }
  const {user} = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = event => {
      event.preventDefault();
      console.log(photoURLRef.current.value);
  }

  const handleNameChange = event =>{
      setName(event.target.value)
  }

  return (
    <div>
      <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
	<form onClick={handleSubmit} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
		<label for="email" className="self-start text-xs font-semibold">Email</label>
		<input id="email" name='email' readOnly defaultValue={user?.email}  type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
		<label for="name" className="self-start text-xs font-semibold">Name</label>
		<input id="name" onChange={handleNameChange} defaultValue={name}  name='name' type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
		<label for="password" className="self-start mt-3 text-xs font-semibold">Photo</label>
		<input id="photoURL" name='photoURL' ref={photoURLRef} defaultValue={user?.photoURL} type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

		<button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900">submit</button>
		<div className="flex justify-center mt-6 space-x-2 text-xs">

		</div>
	</form>
</div>
    </div>
  );
};
export default CheckOut;