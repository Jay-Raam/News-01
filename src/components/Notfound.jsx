import React from "react";
import Image001 from "./ui/m1.gif";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6">
        <img
          src={Image001}
          alt="404 error"
          className="w-[320px] md:w-[500px]"
        />
        <h1>404 - Not Found</h1>
        <Link to="/">
          <button className="text-white px-4 py-2 rounded-md">Go Home</button>
        </Link>
      </div>
    </>
  );
};

export default Notfound;
