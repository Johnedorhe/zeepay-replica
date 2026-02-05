import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  fullName: yup.string().required('Your full name is required'),
  email: yup.string().email().required('Enter an email'),
  password: yup.string().min(6).required('Enter your password'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='min-h-screen lg:flex'>
      <section className='text-sm flex-1 flex flex-col p-12'>
        <div className='flex justify-center m-1'>
          <img src="logo.svg" alt="logo" />
        </div>
        <div className='text-center space-y-3'>
          <h1 className='text-3xl font-semibold'>Welcome back to Zeepay</h1>
          <p className='text-teal-500'>Enter your password and username to continue</p>
        </div>
        <div>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-white rounded-lg p-6 shadow-sm space-y-5"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <label htmlFor="username">Username</label>
                <input 
                  id="username" 
                  type="text" 
                  placeholder="Enter your username" 
                  {...register('fullName')} 
                  className="border border-gray-300 rounded-md p-3 w-full" 
                />
                <p className='text-red-500'>{errors.fullName?.message}</p>
              </p>
              <p>
                <label htmlFor="password" className="text-sm">Password</label>
                <input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  {...register('password')} 
                  className="border text-sm border-gray-300 rounded-md p-3 w-full" 
                />
                <p className='text-red-500'>{errors.password?.message}</p>
              </p>
            </div>
            <div className='flex justify-between'>
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              <div className='font-semibold'>Forgot Password?</div>
            </div>
            <div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white text-center rounded-md w-full px-4 py-1 text-sm"
              >
                Sign in &gt;
              </button>
            </div>
            <div className='flex justify-center items-center text-sm text-teal-500 gap-2'>
              <div className='w-full h-0.5 bg-teal-100'></div>
              <span className='text-nowrap'> or login with </span>
              <div className='w-full h-0.5 bg-teal-100'></div>
            </div>
            <div className='flex justify-between items-center gap-8'>
              <div className='flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md'>
                <img src="google.svg" alt="Google" className="w-4 h-4 mr-2" />
                Google
              </div>
              <div className='flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md'>
                <img src="apple.svg" alt="Apple" className="w-4 h-4 mr-2" />
                Apple
              </div>
            </div>
          </form>

          <div className='text-teal-500 text-center mt-6'>
            Don't have an account? <Link to="/signup" className="text-black font-bold">Sign Up</Link>
          </div>
        </div>
      </section>
      <section className='flex-1 bg-blue-900 flex flex-col justify-center items-center gap-6 p-8'>
        <div className='flex flex-col justify-center'>
          <h1 className="font-semibold text-3xl leading-[30px] text-white
               lg:text-[64px] lg:leading-[72px]  
               tracking-[-0.03em] text-left">
            Early pay, Automatic <span className="block">savings, Transform</span> your money habits
          </h1>
          <p className="text-teal-500 text-sm mt-4">
            Support small businesses with simple invoicing, powerful 
            <span className='block'>integrations, and cash flow management tools.</span>
          </p>
        </div>
        <div><img src="last-image.svg" alt="Mobile" /></div>
      </section>
    </div>
  );
};

export default Login;