import React, { useState } from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup"

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="lg:block lg:w-1/2 bg-cover">
          <img
            className="h-full object-cover"
            src=".\Images\img (10).jpeg"
            alt=""
          />
        </div>
        {/* Set component based on login status */}
        {/* Pass setIsLogin with components so that whenever user clicks on other(signup/login) button
        inside component then the component changes automatically. */}
        { isLogin? (<Login setIsLogin={setIsLogin}/>) : (<Signup setIsLogin={setIsLogin}/>) }
      </div>
    </div>
  );
}

export default LoginPage;
