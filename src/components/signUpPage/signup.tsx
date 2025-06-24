'use client'; // if you're using App Router

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const SignUpForm = () => {
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
          <h2 className="text-2xl text-center font-poppins font-semibold text-indigo-700">Create Admin account</h2>
          <p className="text-sm text-center text-gray-600">Get started by filling out your information.</p>

          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <label htmlFor="">Role</label>
          <select
            className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <label htmlFor="">Phon Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full px-4 py-4 bg-[#EAE8F7] border-b-2 border-b-[#543CDA] rounded-md focus:outline-none"
            required
          />

          <div className="relative">
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
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-sm font-bold text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-800 transition"
          >
            Sign up
          </button>

          <button
            type="button"
            className="w-full border py-3 rounded-md flex justify-center items-center gap-2"
          >
            <Image src="/icons8-google 1.svg" alt="Google" width={240} height={240} className="w-8 h-8" />
            Sign up with Google
          </button>

          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-700 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
