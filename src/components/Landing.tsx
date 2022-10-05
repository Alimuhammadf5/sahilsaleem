import { FC } from "react";

const Landing: FC = () => {
  return (
    <div className="-z-10 flex w-full max-w-screen-lg flex-col items-center justify-center py-20 px-6">
      <h4 className=" text-center text-lg opacity-70 sm:text-2xl">
        Hello 👋, My name is Sahil Saleem
      </h4>
      <h1 className="mt-5 text-center text-4xl font-black leading-tight tracking-wide opacity-90 sm:mt-4 sm:text-7xl sm:leading-tight md:text-8xl md:leading-tight">
        I CREATE WORLD CLASS VIDEO SOLUTIONS.
      </h1>
      <div className="mt-7 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-7">
        <button className="h-12 w-44 rounded-md bg-gray-200 font-medium transition-colors duration-300 hover:bg-gray-300 sm:h-14">
          Contact me
        </button>
        <button className="h-12 w-44 rounded-md bg-blue-600 font-medium text-white transition-colors duration-300 hover:bg-blue-800 sm:h-14">
          Projects
        </button>
      </div>
    </div>
  );
};

export default Landing;
