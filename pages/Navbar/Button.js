import React from "react";
import * as Icons from "react-icons/fa";
import Link from "next/link";

function Button() {
  return (
    <>
      <Link to="/">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Sign Up</span>
        </button>
      </Link>
    </>
  );
}

export default Button;
