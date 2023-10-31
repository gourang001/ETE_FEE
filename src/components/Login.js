import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Login = ({func}) => {
  const nav = useNavigate();

  function validateLoginForm(email, password) {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    
      if (!emailRegex.test(email)) {
          alert("Not a valid email")
          return;
      }
  

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
      if (!passwordRegex.test(password)) {
          alert("Password is not valid")
          return;
      }
  

      
      alert("Logged in");
      func({
        "LoginData":"LoginData"
      });
      nav("/");
  }
  let verify=(e)=>{
      e.preventDefault();
      let email= e.target[0].value;
      let password= e.target[1].value;

      validateLoginForm(email, password);
  }
  return (

    <div className='row'>
    <Navbar/>
      <form onSubmit={verify} className="flex flex-col items-center mt-5 my-36">
      <h1 className="text-3xl font-bold mb-5">Login Form</h1>

                <label className="text-lg" htmlFor="email">Email:</label>
                <input type="email" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="email" id="email"  placeholder="Enter email" />

                <label className="text-lg" htmlFor="pass">Password:</label>
                <input type="password" className="border border-gray-300 p-2 mb-3 rounded-md w-64" name="passWord" id="pass"  placeholder="Enter password" />

                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  )
}

export default Login