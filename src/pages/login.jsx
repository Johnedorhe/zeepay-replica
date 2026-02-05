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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <section className="flex-1 flex flex-col p-6 sm:p-10 lg:p-12 text-sm">
        <div className="flex justify-center mb-4">
          <img src="logo.svg" alt="logo" className="w-12 sm:w-16 md:w-20" />
        </div>
        <div className="text-center space-y-3 mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold">Welcome back to Zeepay</h1>
          <p className="text-teal-500 text-xs sm:text-sm md:text-base">
            Enter your password and username to continue
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg p-6 shadow-sm space-y-5 max-w-md mx-auto w-full">
          {/* Username + Password */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register('fullName')}
                className="border border-gray-300 rounded-md p-3 w-full text-sm"
              />
              <p className="text-red-500 text-xs sm:text-sm">{errors.fullName?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password')}
                className="border border-gray-300 rounded-md p-3 w-full text-sm"
              />
              <p className="text-red-500 text-xs sm:text-sm">{errors.password?.message}</p>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="font-semibold cursor-pointer">Forgot Password?</div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md w-full px-4 py-2 text-sm sm:text-base font-semibold hover:bg-blue-600 transition"
          >
            Sign in &gt;
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

        <div className="text-teal-500 text-center mt-6 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-bold hover:underline">
            Sign Up
          </Link>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 bg-blue-900 flex flex-col justify-center items-center gap-6 p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[64px] leading-7 sm:leading-8 md:leading-10 lg:leading-[72px] text-white tracking-[-0.03em] text-left">
            Early pay, Automatic <span className="block">savings, Transform</span> your money habits
          </h1>
          <p className="text-teal-500 text-xs sm:text-sm md:text-base mt-4">
            Support small businesses with simple invoicing, powerful{" "}
            <span className="block">integrations, and cash flow management tools.</span>
          </p>
        </div>
        <div>
          <img src="last-image.svg" alt="Mobile" className="w-48 sm:w-64 md:w-80 lg:w-[380px] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Login;