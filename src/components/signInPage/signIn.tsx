'use client'; // if you're using App Router

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/3 bg-indigo-700 text-white flex items-center justify-center flex-col p-10 rounded-tr-xl rounded-br-xl">
        <Image src="/nexoris_logo_black.svg" alt='Nexoris Logo' width={240} height={240}/>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-white">
        <form className="w-full max-w-md space-y-4">
          <h2 className="text-2xl text-center font-poppins font-semibold text-indigo-700">Sign In to your account </h2>

          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <div className="relative flex flex-col gap-2">
          <label htmlFor="">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
            <Link href="#" className='text-sm ml-auto text-[#0059F1] underline'>Forgot Password?</Link>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-sm font-bold text-gray-700">
              Remember Me
            </label>
          </div>

          <Link href="/dashboard">
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-800 transition"
          >
            Sign in
          </button>
          </Link>

          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-indigo-700 font-medium hover:underline">
              Sign up
            </Link>
          </p>

          <Link href="/dashboard">Dashboard</Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
