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
      <section className="space-y-5 flex flex-col justify-center items-center flex-1">
        <div>
          <img src="logo.svg" alt="Logo" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center">
            Create your Zeepay account
          </h2>
          <p className="text-sm text-teal-500 text-center">
            Sign up to access comprehensive features
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register('name')}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register('confirmPassword')}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <div className="font-semibold cursor-pointer">Forgot Password?</div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md w-full px-4 py-2 text-sm font-semibold"
          >
            Sign up
          </button>

          <div className="flex justify-center items-center text-sm text-teal-500 gap-2">
            <div className="w-full h-0.5 bg-teal-100"></div>
            <span className="whitespace-nowrap">or login with</span>
            <div className="w-full h-0.5 bg-teal-100"></div>
          </div>

          <div className="flex justify-between items-center gap-8">
            <div className="flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md cursor-pointer">
              <img src="google.svg" alt="Google" className="w-4 h-4 mr-2" />
              Google
            </div>
            <div className="flex flex-1 justify-center items-center p-2 font-semibold border border-teal-200 rounded-md cursor-pointer">
              <img src="apple.svg" alt="Apple" className="w-4 h-4 mr-2" />
              Apple
            </div>
          </div>
        </form>

        <div className="text-teal-500 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-bold">
            Log In
          </Link>
        </div>
      </section>

      <section className="flex-1 bg-blue-900 flex flex-col justify-center items-center gap-6 p-8">
        <div className="flex flex-col justify-center">
          <h1
            className="font-semibold text-3xl leading-[30px] text-white
            lg:text-[64px] lg:leading-[72px] tracking-[-0.03em] text-left"
          >
            Early pay, Automatic <span className="block">savings, Transform</span> your money habits
          </h1>
          <p className="text-teal-500 text-sm mt-4">
            Support small businesses with simple invoicing, powerful{" "}
            <span className="block">
              integrations, and cash flow management tools.
            </span>
          </p>
        </div>
        <div>
          <img src="last-image.svg" alt="Mobile" />
        </div>
      </section>
    </div>
  );
};

export default Signup;