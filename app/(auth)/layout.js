import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-40">
      {children}
    </div>
  );
};

export default AuthLayout;
