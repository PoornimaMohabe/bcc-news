// SignupForm.js
import React, { useState } from 'react';

 function  SignupForm () {
  const [username, setusername]=useState();
  const [password, setpassword]=useState();



  let url =`https://testing-arqw.onrender.com/users`;

  function handleSubmit(e){
    e.preventDefault();
    fetch(url, {
        method:"POST", 
        headers:{"Content-type": "Application/json"}, 
        body:JSON.stringify({
          username:username ,
          password:password,
         

        })
    })
    .then((res)=>{
      return res.json()
    })
    .catch((data)=>{
      console.log(data);
    })
    .catch(error=>{
      console.log(error)
  })
  }
 console.log("signuprender")

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
         
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
        
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
       
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Create Username
          </label>
          <input
            type="text"
            id="password"
            name="password"
          
           
            onChange={(e)=>{setusername(e.target.value)}}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
          Create Password
          </label>
          <input
            type="password"
            id="mobileNumber"
            name="mobileNumber"
            // value={formData.mobileNumber}
            onChange={(e)=>{setpassword(e.target.value)}}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
  
export default SignupForm;
