import { NavLink } from "react-router";

export default function NoProject() {
  return (
    <div className="gap-3 p-5 flex flex-col w-full items-center justify-center sm:">
      <img src="logo.png" alt="logo" className="w-10 lg:w-36 xl:w-36" />
      <h1 className="text-3x1 lg:text-4xl xl:text-4xl font-bold ">
        No Project Selected
      </h1>
      <p className=" text-xs max-w-44 text-center lg:max-w-80 xl:max-w-80 lg:text-2xl xl:text-2xl text-gray">
        Select a project or get started with a new one
      </p>
      <button className="text-xs w-36 h-8 lg:text-xl lg:w-80 lg:h-14 xl:w-80 xl:text-xl xl:h-14 bg-black text-white rounded-lg ">
        <NavLink to="/">Create new project</NavLink>
      </button>
    </div>
  );
}
