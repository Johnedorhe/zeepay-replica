import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Your name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm your password'),
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='lg:flex'>
<section className="space-y-6 flex flex-col justify-center items-center flex-1 p-6 sm:p-8 lg:p-12">
  {/* Logo */}
  <div>
    <img src="logo.svg" alt="Logo" className="w-12 sm:w-16 md:w-20 mx-auto" />
  </div>

  {/* Heading */}
  <div className="text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
      Create your Zeepay account
    </h2>
    <p className="text-xs sm:text-sm md:text-base text-teal-500">
      Sign up to access comprehensive features
    </p>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
    {/* Name + Email */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name" className="text-sm">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          className="border border-gray-300 rounded-md p-3 w-full text-sm"
        />
        <p className="text-red-500 text-xs sm:text-sm">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-sm">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="border border-gray-300 rounded-md p-3 w-full text-sm"
        />
        <p className="text-red-500 text-xs sm:text-sm">{errors.email?.message}</p>
      </div>
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="text-sm">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
        className="border border-gray-300 rounded-md p-3 w-full text-sm"
      />
      <p className="text-red-500 text-xs sm:text-sm">{errors.password?.message}</p>
    </div>

    {/* Confirm Password */}
    <div className="flex flex-col gap-1">
      <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        {...register("confirmPassword")}
        className="border border-gray-300 rounded-md p-3 w-full text-sm"
      />
      <p className="text-red-500 text-xs sm:text-sm">{errors.confirmPassword?.message}</p>
    </div>

    {/* Remember + Forgot */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-xs sm:text-sm">Remember me</label>
      </div>
      <div className="text-xs sm:text-sm font-semibold cursor-pointer">Forgot Password?</div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="bg-blue-500 text-white rounded-md w-full px-4 py-2 text-sm sm:text-base font-semibold hover:bg-blue-600 transition"
    >
      Sign up
    </button>

    {/* Divider */}
    <div className="flex justify-center items-center text-xs sm:text-sm text-teal-500 gap-2">
      <div className="w-full h-0.5 bg-teal-100"></div>
      <span className="whitespace-nowrap">or login with</span>
      <div className="w-full h-0.5 bg-teal-100"></div>
    </div>

    {/* Social Login */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
      <div className="flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md cursor-pointer hover:bg-teal-50">
        <img src="google.svg" alt="Google" className="w-4 h-4 mr-2" />
        Google
      </div>
      <div className="flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md cursor-pointer hover:bg-teal-50">
        <img src="apple.svg" alt="Apple" className="w-4 h-4 mr-2" />
        Apple
      </div>
    </div>
  </form>

  {/* Already have account */}
  <div className="text-teal-500 text-center mt-6 text-sm sm:text-base">
    Already have an account?{" "}
    <Link to="/login" className="text-black font-bold hover:underline">
      Log In
    </Link>
  </div>
</section>

     <section className="flex-1 bg-blue-900 flex flex-col lg:flex-row justify-center items-center gap-6 p-6 sm:p-8 lg:p-12">
  {/* Text Section */}
  <div className="flex flex-col justify-center max-w-xl">
    <h1
      className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[64px] 
                 leading-7 sm:leading-8 md:leading-10 lg:leading-[72px] 
                 text-white tracking-[-0.03em] text-left"
    >
      Early pay, Automatic <span className="block">savings, Transform</span> your money habits
    </h1>
    <p className="text-teal-500 text-xs sm:text-sm md:text-base mt-4">
      Support small businesses with simple invoicing, powerful{" "}
      <span className="block">integrations, and cash flow management tools.</span>
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
    <img
      src="last-image.svg"
      alt="Mobile"
      className="w-48 sm:w-64 md:w-80 lg:w-[380px] h-auto"
    />
  </div>
</section>
    </div>
  );
};

export default Signup;