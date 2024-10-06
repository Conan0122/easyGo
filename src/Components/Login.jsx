import React from "react";

function Login({setIsLogin}) {
  return (
    <div className="w-full p-8 lg:w-1/2">
      <h2 className="font-Mont text-3xl font-extrabold text-center cursor-default">
        easy<span className="text-purple-800">Go.</span>
      </h2>
      <a
        href="#"
        class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3 text-black text-xl">
          <i className="fa-brands fa-google"></i>
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </h1>
      </a>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>
        <p className="text-xs text-center text-gray-500 uppercase cursor-default">
          or login with email
        </p>
        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          required
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <input
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          required
          min={5}
        />
      </div>
      <div className="mt-8">
        <button className="bg-mypurple-0 text-black font-bold py-2 px-4 w-full rounded hover:bg-mypurpledark-0">
          Login
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>
        <button className="text-xs text-gray-500 uppercase"
        onClick={()=>setIsLogin(false)}> {/* Passing function because onclick expects callback function. */}
          Don't have an account?
        </button>
        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  );
}

export default Login;
