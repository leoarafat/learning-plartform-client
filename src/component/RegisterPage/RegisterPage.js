import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const RegisterPage = () => {
const [error, setError] = useState('')
const [success, setSuccess] = useState(false)

const {createUser} = useContext(AuthContext)

    const handleRegisterForm = e =>{
       
        e.preventDefault()
        setSuccess(false)
        const form = e.target ;
        // const fullName = form.fullName.value ;
        // const photoURL = form.photoURL.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        registerUserEmail(email, password)
        form.reset()
    }
    const registerUserEmail = (email, password) =>{
        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user)
            setSuccess(true)
            setError('')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage, errorCode)
            // ..
          });
    }




    return (
<div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
	<form onSubmit={handleRegisterForm} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
		<label for="Fullname" className="self-start text-xs font-semibold">Full Name</label>
		<input id="fullName" type="text" name='fullName' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" required />
		<label for="PhotoURL" className="self-start text-xs font-semibold">PhotoURL</label>
		<input id="PhotoURL" type="text" name='PhotoURL' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" required/>

		<label for="email" className="self-start text-xs font-semibold">Email</label>
		<input id="email" type="email" name='email' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" required/>


		<label for="password" className="self-start mt-3 text-xs font-semibold">Password</label>
		<input id="password" type="password" name="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" required/>
		<button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
		<div className="flex justify-center mt-6 space-x-2 text-xs">
<span>Already have an account?</span>
			<Link rel="noopener noreferrer" to="/login" className="dark:text-gray-400">Sign in</Link>
            {error}
		</div>
        <div>
            
            {success && <small>Successfully Register</small> }
        </div>
	</form>
</div>
    );
};

export default RegisterPage;