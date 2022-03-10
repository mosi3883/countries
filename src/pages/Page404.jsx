import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="container mx-auto px-4  text-center max-h-window relative">
      <div className="absolute abs-center">
        <h1 className="text-2xl mb-2   md:text-3xl md:mb-4 lg:text-5xl">404 Not Found</h1>
        <Link to="/" className="text-blue-700 text-lg">
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default Page404;
