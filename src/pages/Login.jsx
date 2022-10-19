import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className='w-screen h-screen'>
      <img
        className='hidden sm:block absolute min-w-full min-h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/8715d26d-6eab-4694-af56-ff43aeaaa09f/SK-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='/'
      />
      <div className=' bg-black/60 fixed top-0 left-0 right-0 w-full h-screen'></div>

      <div className='w-full px-4 pt-24 z-50'>

        <div className='relative max-w-[450px] h-[520px] px-16 mx-auto mb-20 bg-black/75 text-white'>

          <div className='max-w-[350px] mx-auto py-16 '>

            <h1 className=' text-white text-3xl font-bold'>Sign In</h1>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 text-xs bg-white rounded placeholder-black placeholder:px-3'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 text-xs bg-white rounded placeholder-black placeholder:px-3'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='sign-bt-cl py-3 mt-6 mb-1 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p className='text-xs text-gray-400'>
                  <input className='w-2.5 h-2.5 mr-2' type='checkbox' />
                  Remember me
                </p>
                <p className='text-xs text-gray-400'>Need Help?</p>
              </div>
              <p className='pt-8 mt-12 mb-1'>
                <span className='text-sm text-gray-400'>New to Netflix?</span>
                <Link to='/signup'
                className='text-sm hover:underline'> Sign up now.</Link>
              </p>
              <span className='text-xs text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
               <Link className='text-blue-500 hover:underline'>Learn more.</Link>
               </span>
            </form>
         </div>

        </div>
       
      
      
     </div>
    </div>
  
 
   
     
  );
};

export default Login;