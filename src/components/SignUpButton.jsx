import React from "react";

const SignUpButton = (props = null) => {
  return (
    <button
      className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm"
      style={props}
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
