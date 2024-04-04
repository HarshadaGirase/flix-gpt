import React, { useRef, useState } from 'react'
import Header from './Header'
import banner from '../assets/banner.jpg'
import { checkValidData } from '../utils/validation';
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [Message, setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const errorMessage = checkValidData(email.current.value, password.current.value);

    console.log(errorMessage)
    setMessage(errorMessage);
  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!IsSignInForm);
  }
  return (
    <div className=''> 
        <Header/>
        <div>
            <img className='absolute' src={banner} alt="banner " />
        </div>

        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg ' onSubmit={(event)=>{event.preventDefault()}}>
          <h1 className='font-bold text-white text-3xl py-4'>{IsSignInForm ? "Sign In" : "Sign Up" }</h1>
          {
            !IsSignInForm && <input type="text " placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg ' />
          }
          <input type="text " placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg ' ref={email} />
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 text-white rounded-lg' ref={password}  />

          <p className='text-red-500'>{Message}</p>
          <button className='p-4 my-4 bg-red-600 w-full text-white rounded-lg' onClick={handleButtonClick}>{IsSignInForm ? "Sign In" : "Sign Up "}</button>
          <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "Already user? Sign In" :"New to flix-gpt? Sign Up Now" }</p>
        </form>
    </div>
  )
}

export default Login