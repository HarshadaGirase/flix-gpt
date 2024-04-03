import React, { useState } from 'react'
import Header from './Header'
import banner from '../assets/banner.jpg'
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);


  const toggleSignInForm = () =>{
    setIsSignInForm(!IsSignInForm);
  }
  return (
    <div className=''> 
        <Header/>
        <div>
            <img className='absolute' src={banner} alt="banner " />
        </div>

        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg '>
          <h1 className='font-bold text-white text-3xl py-4'>{IsSignInForm ? "Sign In" : "Sign Up" }</h1>
          {
            !IsSignInForm && <input type="text " placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg ' />
          }
          <input type="text " placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg ' />
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg' />
          <button className='p-4 my-4 bg-red-600 w-full text-white rounded-lg'>{IsSignInForm ? "Sign In" : "Sign Up "}</button>
          <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "Already user? Sign In" :"New to flix-gpt? Sign Up Now" }</p>
        </form>
    </div>
  )
}

export default Login